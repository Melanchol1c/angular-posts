import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '@/app/core/models';
import { PostsService } from '@/app/core/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent {
  public readonly posts$: Observable<Post[]>;
  private readonly postsParams$: BehaviorSubject<any>;

  public constructor(protected readonly postsService: PostsService) {
    this.postsParams$ = new BehaviorSubject({ _limit: 10 });
    this.posts$ = this.createPostsStream();
  }

  private createPostsStream(): Observable<Post[]> {
    return this.postsParams$.pipe(
      switchMap((params) => this.postsService.getAll(params))
    );
  }

  public onKek(limit): void {
    this.postsParams$.next({ _limit: limit });
  }
}
