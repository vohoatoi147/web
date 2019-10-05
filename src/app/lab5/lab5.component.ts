import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.component.html',
  styleUrls: ['./lab5.component.css']
})
export class Lab5Component implements OnInit {
  hcn = {
    cd: null,
    cr: null,
    cv:null,
    dt:null
  }
  congnhan ={
    name: null,
    gender: null,
    luong: null,
    rate:null,
    age:0,
  } 
  list = [
    {
      age: 'dưới 25 tuổi',
      rate: 0.07
    },
    {
      age: 'từ 25 đến 40 tuổi',
      rate: 0.1
    },
    {
      age: 'trên 40 tuổi',
      rate: 0.15  
    }
  ]

  scope = [
    { id: '',
      name: 'Nước ngọt',
      price: 10000,
      soluong: 0,
      thanhtien: 0
    },
    { id: '',
      name: 'Cà phê đen',
      price: 12000,
      soluong: 0,
      thanhtien: 0
    },
    {
      id: '',
      name: 'Thuốc lá',
      price: 18000,
      soluong: 0,
      thanhtien: 0
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  Tinh(){
    this.hcn.cv = 2*(this.hcn.cd + this.hcn.cr);
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }

  tienthuong(){
    let luong
    if(this.congnhan.luong >= 2000000 && this.congnhan.name){
     luong =  this.congnhan.rate * this.congnhan.luong }
    if(this.congnhan.gender === 'Nữ')
    luong += 200000;
    return luong
  }

  thanhtien() {
		let sum = 0;
		for (let i = 0; i < this.scope.length; i++) {
			sum += this.scope[i].price * this.scope[i].soluong;
		}
		return sum;
	}


}
