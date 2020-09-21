import { Comment, Post, User } from '@/app/core/models';
import { CommentsService } from '@/app/core/services/comments.service';
import { PostsService } from '@/app/core/services/posts.service';
import { UserService } from '@/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css'],
})
export class PostDetailsPageComponent implements OnInit {
  public author$: Observable<User>;
  public comments$: Observable<Comment[]>;
  public post$: Observable<Post>;

  constructor(
    protected readonly postsService: PostsService,
    protected readonly usersService: UserService,
    protected readonly commentsService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.params.postId;

    this.post$ = this.postsService
      .getById(postId)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));

    this.author$ = this.post$.pipe(
      switchMap((post) => this.usersService.getById(post.userId)),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.comments$ = this.post$.pipe(
      switchMap((post) => this.commentsService.getByPostId(post.id))
    );
  }
}
