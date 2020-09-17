import { Component } from '@angular/core';
import { BehaviorSubject, Observable, race } from 'rxjs';
import { concatMap, filter, first, map, scan, switchMap, take, tap } from 'rxjs/operators';
import { Post } from 'src/app/core/models/post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {
  public readonly posts$: Observable<Post[]>;
  private readonly postsParams$: BehaviorSubject<any>;

  public constructor(protected readonly postsService: PostsService) {
    this.postsParams$ = new BehaviorSubject({_limit: 10});
    this.posts$ = this.createPostsStream();
   }

  private createPostsStream(): Observable<Post[]>{
    return this.postsParams$.pipe(
      concatMap(params => this.postsService.getAll(params)),
      map(posts => posts.filter(p => p.userId === 1)),
      scan((acc, curr) => acc.concat(curr), []),
    );
  }

  public onKek(limit): void {
   this.postsParams$.next({_limit: limit});
  }
}
