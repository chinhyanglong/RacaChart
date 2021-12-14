import { Component, OnInit } from '@angular/core';
import { RacaTypeService } from '../racatype/racatype.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  racaPrice : any;
  btcPrice : any;
  constructor(private service: RacaTypeService) { }
  ngOnInit() {
      this.getRacaPriceCom();
      this.getBTCPriceCom();
  }
  getRacaPriceCom() {
    this.service.getRacaPrice().subscribe(respon=>{
      this.racaPrice = respon["radio-caca"]["usd"];
    });
  }
  getBTCPriceCom() {
    this.service.getBTCPrice().subscribe(respon=>{
      this.btcPrice = respon["bitcoin"]["usd"];
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/