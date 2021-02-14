import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KaplanServiceService {
  booksApiURL: string;

  constructor(private http: HttpClient) {
    this.booksApiURL = `https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`;
  }

  getBooks(): Observable<any> {
    return this.http.get(this.booksApiURL);
  }

}
