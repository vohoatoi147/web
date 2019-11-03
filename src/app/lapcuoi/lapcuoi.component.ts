import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lapcuoi',
  templateUrl: './lapcuoi.component.html',
  styleUrls: ['./lapcuoi.component.css']
})
export class LapcuoiComponent implements OnInit {
  url = "./assets/db/guitar.json";
  product;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.get().subscribe(data => {
      this.product = data
    })
  }
  get() {
    return this.http.get(this.url)
  }
}


