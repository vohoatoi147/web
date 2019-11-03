import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab4Component } from './lab4/lab4.component';
import { Lab5Component } from './lab5/lab5.component';
import { LapcuoiComponent } from './lapcuoi/lapcuoi.component';
import { ChtietlapcuoiComponent } from './chtietlapcuoi/chtietlapcuoi.component';
import { LapcuoigiohangComponent } from './lapcuoigiohang/lapcuoigiohang.component';


@NgModule({
  declarations: [
    AppComponent,
    DanhsachComponent,
    ChitietComponent,
    Lab1Component,
    Lab4Component,
    Lab5Component,
    LapcuoiComponent,
    ChtietlapcuoiComponent,
    LapcuoigiohangComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "",
      component:Lab1Component },
      {path: 'lab2', component:DanhsachComponent},
      {path: 'lab4', component:Lab4Component},
      {path: 'lab5', component:Lab5Component},
      { path: 'trangchu', component: LapcuoiComponent },
      { path: 'trangchu/:id', component: ChtietlapcuoiComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
      { path: 'giohang', component: LapcuoigiohangComponent },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
