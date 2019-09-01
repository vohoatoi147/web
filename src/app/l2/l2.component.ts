import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2',
  templateUrl: './l2.component.html',
  styleUrls: ['./l2.component.css']
})
export class L2Component implements OnInit {

  constructor() { }
  danhsach=[
    {
      "ten":"SamSung A",
      "code":"MT-4231",
      "ngay":"March 21,2018",
      "gia":"512.12	",
      "hinh":"../assets/a9.jpg"
    },
    {
      "ten":"iphone",
      "code":"MT-4231",
      "ngay":"March 21,2018",
      "gia":"512.12	",
      "hinh":"../assets/iphone.jpg"
    },
    {
      "ten":"note 10",
      "code":"MT-4231",
      "ngay":"March 21,2018",
      "gia":"512.12	",
      "hinh":"../assets/note10.jpg"
    },
    {
      "ten":"vivo",
      "code":"MT-4231",
      "ngay":"March 21,2018",
      "gia":"512.12	",
      "hinh":"../assets/vivo.jpg"
    }
  ]
  ngOnInit() {
  }

}
