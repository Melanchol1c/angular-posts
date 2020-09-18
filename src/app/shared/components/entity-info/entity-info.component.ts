import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-info',
  templateUrl: './entity-info.component.html',
  styleUrls: ['./entity-info.component.css'],
})
export class EntityInfoComponent implements OnInit {
  @Input()
  public avatar: string;

  @Input()
  public name: string;

  @Input()
  public subtitle: string;

  constructor() {}

  ngOnInit(): void {}
}
