import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsService } from '@/app/core/services/posts.service';
import { UserService } from '@/app/core/services/user.service';
import { RenderPost } from '../../types';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent {
  public readonly postsList$: Observable<RenderPost[]>;

  public constructor(
    protected readonly postsService: PostsService,
    protected readonly usersService: UserService
  ) {
    this.postsList$ = this.createPostsStream();
  }

  private createPostsStream(): Observable<RenderPost[]> {
    const postsStream = this.postsService.getAll();
    const usersStream = this.usersService.getAll();
    const joinStream = combineLatest([postsStream, usersStream]);

    return joinStream.pipe(
      map((data) => {
        const [posts, users] = data;

        return posts.map((post) => ({
          ...post,
          user: users.find((user) => user.id === post.userId),
        }));
      })
    );
  }
}
