import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { BukuService } from 'src/app/services/buku.service';
import { AddmodalComponent } from '../addmodal/addmodal.component';
import { Book } from '../models/book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabelbuku',
  templateUrl: './tabelbuku.component.html',
  styleUrls: ['./tabelbuku.component.css']
})
export class TabelbukuComponent implements OnInit {

  books = [];

  constructor(
    private modalService: NgbModal,
    private bukuService: BukuService
  ) { }


  getById(id: string) {
    for (let i = 0; i < this.books.length; i++) {
      const data = this.books[i];
      if (data.id == id) {
        return data;
      }
    }
  }

  addBook() {
    const modalRef = this.modalService.open(AddmodalComponent, { backdrop: 'static', keyboard: false, centered: true });
    modalRef.result.then(value => {
      if (value == 'reload') {
        this.getAll();
      }
    });
  }

  getAll() {
    return this.bukuService.getBooks().subscribe((data) => {
      this.books = data['data'];
      console.log("getall");
      console.log(data);

    });
  }

  exportPdf() {
    window.open('http://localhost:3000/books/download', 'popUpWindow', 'height=1000,width=900,left=10,top=10,scrollbars=yes,menubar=no');
  }
  openModal(id: string) {
    const modalRef = this.modalService.open(ModalComponent, { backdrop: 'static', keyboard: false, centered: true });

    const entity = this.getById(id);

    modalRef.componentInstance.setId(entity.id);
    modalRef.componentInstance.setJudul(entity.judul);
    modalRef.componentInstance.setPenerbit(entity.penerbit);
    modalRef.componentInstance.setHarga(entity.harga);
    modalRef.componentInstance.setStok(entity.stok);
    modalRef.result.then(value => {
      this.getAll();
    });


  }

  deleteById(id) {
    if (confirm('Yakin mau menghapus data?')) {
      return this.bukuService.deleteById(id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

  ngOnInit() {

    this.getAll();

  }
}
