import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as cloneDeep from 'lodash/cloneDeep';
import { KaplanServiceService } from "../../providers/kaplan-service.service";
import { DatePipe } from '@angular/common';

export interface DialogData {
  bookName: string;
  author: string;
  publisher: string;
  publishedDate: any;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
  titleDialogRef: MatDialogRef<AddBookDialog>;
  bookList: any;
  bookName: string;
  author: string;
  publisher: string;
  publishedDate: any;
  books: any;
  constructor(private kaplanService: KaplanServiceService, public dialog: MatDialog,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.loadBooksFunction();
  }

  loadBooksFunction = () => {
    this.kaplanService.getBooks().subscribe((res: any) => {
      this.bookList = cloneDeep(res.items);
      this.books = this.bookList;
    }, (err) => {
      console.log(err);
    })
  }

  openDialog() {
    this.titleDialogRef = this.dialog.open(AddBookDialog, {
      width: '400px',
      data: {
        bookName: this.bookName,
        author: this.author,
        publisher: this.publisher,
        publishedDate: this.publishedDate
      }
    });

    this.titleDialogRef.afterClosed().subscribe(result => {
      this.addNewBookFunction(result);
    });
  }

  addNewBookFunction = (data) => {
    const date = new Date(data.publishedDate);
    const newBook = {
      volumeInfo: {
        title: data.bookName,
        publisher: data.publisher,
        publishedDate: this.datepipe.transform(date, 'yyyy-MM-dd'),
        authors: [data.author]
      }
    };
    const books = this.bookList;
    books.push(newBook);
    this.bookList = cloneDeep(books);
    this.books = this.bookList;
  }

  search = async (event) => {
    const data = this.bookList;
    const searchValue = await this.searchFunc(event.target.value, data);
    this.books = searchValue;
  }

  searchFunc(text, items) {
    text = text.split(' ');
    return items.filter((item) => {
      return text.every((el) => {
        if ((item.volumeInfo.publisher && item.volumeInfo.publisher.toLowerCase().indexOf(el.toLowerCase()) > -1)
        || (item.volumeInfo.title && item.volumeInfo.title.toLowerCase().indexOf(el.toLowerCase()) > -1)
        || (item.volumeInfo.authors && item.volumeInfo.authors[0] && item.volumeInfo.authors[0].toLowerCase().indexOf(el.toLowerCase()) > -1)) {
          return item;
        }
      });
    });
  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'add-bookDialog.html',
})
export class AddBookDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}