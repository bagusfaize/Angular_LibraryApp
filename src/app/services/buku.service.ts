import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../components/models/book';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(private httpClient: HttpClient) { }

  url  = 'http://localhost:3000/books/';

   getBooks(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  deleteById(id: number): Observable<any> {
    console.log('dihapus ' + this.url + id);
    return this.httpClient.delete(this.url + id);
  }

  addBook(book: any): Observable<any> {
    return this.httpClient.post(this.url, book);
  }

  update(id: number, book: Book): Observable<Book> {
  console.log(this.url + id, book);
  return this.httpClient.put<Book>(this.url + id, book);
  }
}
