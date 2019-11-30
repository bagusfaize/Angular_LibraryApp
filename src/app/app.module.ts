import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TabelbukuComponent } from './components/tabelbuku/tabelbuku.component';
import { HomeComponent } from './components/home/home.component';
import { TabelmahasiswaComponent } from './components/tabelmahasiswa/tabelmahasiswa.component';
import { ModalComponent } from './components/modal/modal.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmodalComponent } from './components/addmodal/addmodal.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabelbukuComponent,
    HomeComponent,
    TabelmahasiswaComponent,
    ModalComponent,
    AddmodalComponent,
    AlertComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NgbActiveModal
  ],
  entryComponents:[
    ModalComponent,
    AddmodalComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
