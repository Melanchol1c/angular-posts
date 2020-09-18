import { User } from '@/app/core/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css'],
})
export class AuthorInfoComponent implements OnInit {
  @Input()
  author: User;

  constructor() {}

  ngOnInit(): void {}
}
