import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @Input()
  public src: string;

  @Input()
  public size: number;

  constructor() {
    console.log(this.src);
  }

  ngOnInit(): void {}
}
