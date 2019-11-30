import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelbukuComponent } from './components/tabelbuku/tabelbuku.component';
import { HomeComponent } from './components/home/home.component';
import { TabelmahasiswaComponent } from './components/tabelmahasiswa/tabelmahasiswa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabelbuku', component: TabelbukuComponent },
  { path: 'tabelmahasiswa', component: TabelmahasiswaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
