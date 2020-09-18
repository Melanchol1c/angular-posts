import { Post, User } from '@/app/core/models';
import { PostsService } from '@/app/core/services/posts.service';
import { UserService } from '@/app/core/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css'],
})
export class PostDetailsPageComponent implements OnInit, OnDestroy {
  public post: Post;
  public author$: Observable<User>;
  private postSubscription: Subscription;

  constructor(
    protected readonly postsService: PostsService,
    protected readonly usersService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.params.postId;
    const postStream = this.postsService.getById(postId);

    this.postSubscription = postStream.subscribe((data) => {
      if (data !== undefined) {
        this.post = data;
        this.author$ = this.usersService.getById(data.userId);
      }
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
