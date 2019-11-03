import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {YourcardService} from '../yourcard.service';


@Component({
  selector: 'app-chtietlapcuoi',
  templateUrl: './chtietlapcuoi.component.html',
  styleUrls: ['./chtietlapcuoi.component.css']
})
export class ChtietlapcuoiComponent implements OnInit {
  url='./assets/db/guitar.json';
  infoGuitar:any;
  listGuitar:any;
  product:any;
  id;
  feature;
  gg=30;
  soluong =1;
  price;
  constructor(private http:HttpClient,private route:ActivatedRoute,private card:YourcardService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.id=+para.get('id');
    });
    this.getAll().subscribe(data=>
      {
        this.infoGuitar=data;
        this.product=this.infoGuitar.find(a=>a.id===this.id);
        this.feature=this.product.newfeature;
        this.price=this.product.price;
        
      })
  }
  getAll()
  {
    return this.http.get(this.url);
  }
  yourprice()
  {
    return (this.product.price-(this.product.price*this.product.giamgia/100))*this.soluong;
  }

  addToCard()
  {
    this.product.soluong=this.soluong;
    this.card.addToCart(this.product);
  }

}
