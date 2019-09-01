import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l6',
  templateUrl: './l6.component.html',
  styleUrls: ['./l6.component.css']
})
export class L6Component implements OnInit {

  constructor() { }
  teo=
{
  "ten":" Nguyễn Văn Tèo",
  "ngaysinh":"20-12-1990",
  "gt":"nam",
  diem:8.5
}

  hocsinh=[
    {
      "ten":"Nguyễn Văn Tèo",
      "ngaysinh":"20-01-1990",
      "gt":"nam",
      "hinh":"../assets/nam.jpg",
      diem:8.5
    },
    {
      "ten":"Phan Thị Nở",
      "ngaysinh":"20-12-1999",
      "gt":"nu",
      "hinh":"../assets/nu.jpg",
      diem:8.5
    },
    {
      "ten":"Nguyễn Khá Bảnh",
      "ngaysinh":"20-01-2000",
      "gt":"nam",
      "hinh":"../assets/nam1.jpg",
      diem:8.5
    }
  ]
  ngOnInit() {
  }

}
