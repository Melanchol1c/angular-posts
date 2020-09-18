import { Post } from '@/app/core/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  @Input()
  public post: Post;

  constructor() {}

  ngOnInit(): void {}
}
