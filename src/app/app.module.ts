import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab4Component } from './lab4/lab4.component';
import { Lab5Component } from './lab5/lab5.component';


@NgModule({
  declarations: [
    AppComponent,
    DanhsachComponent,
    ChitietComponent,
    Lab1Component,
    Lab4Component,
    Lab5Component,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "",
      component:Lab1Component },
      {path: 'lab2', component:DanhsachComponent},
      {path: 'lab4', component:Lab4Component},
      {path: 'lab5', component:Lab5Component},
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
