import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { L1Component } from './l1/l1.component';
import { L2Component } from './l2/l2.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { L5Component } from './l3/l5/l5.component';
import { L6Component } from './l6/l6.component';

@NgModule({
  declarations: [
    AppComponent,
    L1Component,
    L2Component,
    L3Component,
    L4Component,
    L5Component,
    L6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
