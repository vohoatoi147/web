import { Component, OnInit } from '@angular/core';
import { YourcardService} from '../yourcard.service';

@Component({
  selector: 'app-lapcuoigiohang',
  templateUrl: './lapcuoigiohang.component.html',
  styleUrls: ['./lapcuoigiohang.component.css']
})
export class LapcuoigiohangComponent implements OnInit {
  product:any;
  constructor(private card:YourcardService) { }

  ngOnInit() {
    this.product=this.card.getItems();
    
    
  }
  tinhtien(p,s)
  {
    return p*s;
  }
  

}
