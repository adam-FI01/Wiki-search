import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent {

  @Input() pages: any = [];

  xss = '<img src"" onerror="alert(123)"/>'

  constructor() {}

}
