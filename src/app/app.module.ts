import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ChitietComponent } from './chitiet/chitiet.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachComponent,
    ChitietComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "",
      component:DanhsachComponent },
      {path: 'danhsach', component:DanhsachComponent},
      { path: 'danhsach/chitet/:id', component: ChitietComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
