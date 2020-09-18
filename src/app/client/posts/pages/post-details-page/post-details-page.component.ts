import { Post } from '@/app/core/models';
import { PostsService } from '@/app/core/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css'],
})
export class PostDetailsPageComponent implements OnInit {
  public readonly post$: Observable<Post>;

  constructor(
    protected readonly postsService: PostsService,
    private route: ActivatedRoute
  ) {
    const postId = this.route.snapshot.params.postId;
    this.post$ = this.postsService.getById(postId);
  }

  ngOnInit(): void {}
}
