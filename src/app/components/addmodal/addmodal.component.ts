import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../models/book';
import { BukuService } from 'src/app/services/buku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.css']
})
export class AddmodalComponent implements OnInit {

  book: Book = new Book;

  constructor(
    private bookService: BukuService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {
    this.book = new Book();
  }

  ngOnInit() {
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      console.log (data);
      const response = data;
      if ( response['code'] == '200') {
        this.book = data['data'];
        this.activeModal.close('reload');
      } else {
        alert(response['message']);
      }
    });
  }
}
