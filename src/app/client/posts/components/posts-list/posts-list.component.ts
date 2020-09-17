import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post';

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
  public posts: Post[];

  /**
   *
   */
  public constructor() { }

  /**
   *
   */
  public ngOnInit(): void {
  }
}
