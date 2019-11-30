import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BukuService } from 'src/app/services/buku.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  form = this.formBuilder.group({
    id: ['', Validators.required],
    judul: ['', Validators.required],
    penerbit: ['', Validators.required],
    harga: ['', Validators.required],
    stok:['', Validators.required]
  })
  
  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder : FormBuilder,
    private bukuService : BukuService
    
    ){}

  ngOnInit() {
  }

  setId(id: string){
    this.form.get('id').setValue(id);
  }

  setJudul(judul: string){
    this.form.get('judul').setValue(judul);
  }
  setPenerbit(penerbit:string){
    this.form.get('penerbit').setValue(penerbit);
  }
  setHarga(harga:number){
    this.form.get('harga').setValue(harga);
  }
  setStok(stok:number){
    this.form.get('stok').setValue(stok);
  }



  updateBook(){
    var book = this.form.getRawValue();
    return this.bukuService.update(book.id, book).subscribe(data => {
      book = data["data"];
      console.log(data);
      this.activeModal.close('reload');
    });
  }

}
