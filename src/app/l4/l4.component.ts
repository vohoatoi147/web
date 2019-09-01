import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-l4',
  templateUrl: './l4.component.html',
  styleUrls: ['./l4.component.css']
})
export class L4Component implements OnInit {

  constructor() { }
  giohang=
  [
    {
      "id":"1",
      "hinh":"../assets/vivo.jpg",
      "name":"Vivo V9",
      gia:464,
      "sl":1
    },
    {
      "id":"2",
      "hinh":"../assets/a9.jpg",
      "name":"SamSung A9",
      gia:453,
      "sl":1
    },
    {
      "id":"3",
      "hinh":"../assets/note10.jpg",
      "name":"SamSung Note 10",
      gia:543,
      "sl":1
    },
    {
      "id":"4",
      "hinh":"../assets/s10.jpg",
      "name":"SamSung S10",
      gia:568,
      "sl":1
    }
  ]
  ngOnInit() {
  }
tongtien()
{
  let s=0;
  this.giohang.forEach(function(item)
  {
    s=s+item.gia*item.sl;
  })
  return s;
}
tang(id)
{
  
  for(let i=0;i<this.giohang.length;i++)
  {
    if(this.giohang[i].id===id)
    this.giohang[i].sl++;
  }
}
giam(id)
{
  
  for(let i=0;i<this.giohang.length;i++)
  {
    if(this.giohang[i].id===id)
    this.giohang[i].sl--;
  }
}
}

