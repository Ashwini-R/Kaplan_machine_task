import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-tile',
  templateUrl: './books-tile.component.html',
  styleUrls: ['./books-tile.component.scss']
})
export class BooksTileComponent implements OnInit {
  @Input() bookName: string;
  @Input() author: Array<string>;
  @Input() publisher: string;
  @Input() publishedDate: string;
  constructor() { }

  ngOnInit(): void {
  }

}
