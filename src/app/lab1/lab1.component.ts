import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css']
})
export class Lab1Component implements OnInit {
  teo=
  {
    "ten":"Tèo",
    "ns":"20-01-1990",
    "gt":"nam",
    "hinh":"./assets/nam.jpg",
    diem:8.5,
  }

  student=[{
    "ten":"Nguyễn Văn Tèo",
    "ngaysinh":"20-11-2000",
    "gt":"nam",
    "hinh":"../assets/nam.jpg",
    diem:8.5
  },
  {
    "ten":"Phan Thị Nở",
    "ngaysinh":"18-05-2001",
    "gt":"nữ",
    "hinh":"../assets/nu.jpg",
    diem:8.5
  },
  {
    "ten":"Nguyễn Khá Bảnh",
    "ngaysinh":"12-02-2003",
    "gt":"nam",
    "hinh":"../assets/nam.jpg",
    diem:8.5
  }
]

giohang=
[
  {
    "id":"1",
    "hinh":"../assets/vivo.jpg",
    "name":"Vivo S2",
    gia:452,
    "sl":1
  },
  {
    "id":"2",
    "hinh":"../assets/a9.jpg",
    "name":"Galaxy A9",
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
    "hinh":"../assets/iphone.jpg",
    "name":"Iphone XSR",
    gia:651,
    "sl":1
  }

]

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

  constructor() { }
 
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
