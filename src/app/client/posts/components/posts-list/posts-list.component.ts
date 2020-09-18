import { Component, Input, OnInit } from '@angular/core';
import { RenderPost } from '../../types';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})

/**
 *
 */
export class PostsListComponent implements OnInit {
  /**
   *
   */
  @Input()
  public posts: RenderPost[];

  /**
   *
   */
  public constructor() {}

  /**
   *
   */
  public ngOnInit(): void {}
}
