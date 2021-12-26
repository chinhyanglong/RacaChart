import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../racatype/products';
import { RacaTypeService } from '../racatype/racatype.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Properties } from '../racatype/properties';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  lstKissland: Product[] = [];
  lstBMBM: Product[] = [];
  lstEgg: Product[] = [];
  lstMTM = <Product[]>[];
  lstYD: Product[] = [];
  lstPotion: Product[] = [];
  nameType: any;
  columns: string[] = ['id', 'fixed_price', 'image_url', 'status'];
  columnsMTM: string[] = ['id','score','level', 'fixed_price', 'image_url', 'status'];
  dataSourceKissLand: any;
  dataSourceYellowDiamond: any;
  dataSourceBMBM: any;
  dataSourceEgg: any;
  dataSourceMTM: any;
  minEgg: any;
  minBMBM: any;
  minYD: any;
  minMTM: any;
  minKiss: any;
  minPotion: any;
  avgEgg: any;
  avgBMBM: any;
  avgYD: any;
  avgMTM: any;
  avgKiss: any;
  avgPotion: any;
  avg: any;
  id: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private service: RacaTypeService) { }
  ngOnInit() {
    this.getKissLandPrice();
    this.getBMBMPrice();
    this.getEggPrice();
    this.getMTMPrice();
    this.getYellowDiamondPrice();
    this.getPotionPrice();
    this.id = setInterval(() => {
      this.getKissLandPrice();
      this.getBMBMPrice();
      this.getEggPrice();
      this.getMTMPrice();
      this.getYellowDiamondPrice();
    }, 15000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  getKissLandPrice() {
    this.service.getKissLandType().subscribe(resp => {
      this.lstKissland = resp.list as Product[];
      this.minKiss = new Intl.NumberFormat().format(resp.list[0].fixed_price);
      this.avgKiss = this.getAVG(this.lstKissland.slice(0, 5));
      this.dataSourceKissLand = new MatTableDataSource<Product>(this.lstKissland);
      this.dataSourceKissLand.paginator = this.paginator;
      this.dataSourceKissLand.sort = this.sort;

    });

  }
  getBMBMPrice() {
    this.service.getBMBMType().subscribe(resp => {
      this.lstBMBM = resp.list as Product[];
      this.minBMBM = new Intl.NumberFormat().format(resp.list[0].fixed_price);
      this.avgBMBM = this.getAVG(this.lstBMBM.slice(0, 5));
      this.dataSourceBMBM = new MatTableDataSource<Product>(this.lstBMBM);
      this.dataSourceBMBM.paginator = this.paginator;
      this.dataSourceBMBM.sort = this.sort;

    });

  }
  getEggPrice() {
    this.service.getEggType().subscribe(resp => {
      this.lstEgg = resp.list as Product[];
      this.minEgg = new Intl.NumberFormat().format(resp.list[0].fixed_price);
      this.avgEgg = this.getAVG(this.lstEgg.slice(0, 5));
      this.dataSourceEgg = new MatTableDataSource<Product>(this.lstEgg);
      this.dataSourceEgg.paginator = this.paginator;
      this.dataSourceEgg.sort = this.sort;

    });

  }
  getMTMPrice() {
    this.service.getMTMType().subscribe(async resp => {
      this.lstMTM.length = 0;
      const arr = resp.list as Product[];
      for (let i = 0; i < arr.length; i++) {
        const p = new Product();
        p.id = arr[i].id;
        p.name = arr[i].name;
        p.image_url = arr[i].image_url;
        p.sale_address = arr[i].sale_address;
        p.sale_type = arr[i].sale_type;
        p.status = arr[i].status;
        p.token_id = arr[i].token_id;
        p.fixed_price = arr[i].fixed_price;
        p.count = arr[i].count;
        p.highest_price = arr[i].highest_price;
        p.score = arr[i].score;
        p.level = arr[i].level;
        this.lstMTM.push(p)
      }
      this.minMTM = new Intl.NumberFormat().format(resp.list[0].fixed_price);

      this.avgMTM = this.getAVG(this.lstMTM.slice(0, 5));
      for (let index = 0; index < this.lstMTM.length; index++) {
        var mtmId = this.lstMTM[index].id;
        const res = await this.service.getNftDetaiType(mtmId).toPromise();
        // this.service.getNftDetaiType(mtmId).subscribe(res => {
        let nftPro = res.data.properties as Properties[];
        for (let idx = 0; idx < nftPro.length; idx++) {
          const elementProp = nftPro[idx];
          if (elementProp.key == "Score") {
            this.lstMTM.filter(item => item.id === mtmId)[0].score = elementProp.value;
          }
          if (elementProp.key == "Level") {
            this.lstMTM.filter(item => item.id === mtmId)[0].level = Number(elementProp.value);
          }
        }
        
        // });
      }
      this.dataSourceMTM = new MatTableDataSource<Product>(this.lstMTM);
      console.log(this.lstMTM);
      console.log(this.dataSourceMTM);
      this.dataSourceMTM.paginator = this.paginator;
      this.dataSourceMTM.sort = this.sort;
    });


  }
  getYellowDiamondPrice() {
    this.service.getYellowType().subscribe(resp => {
      this.lstYD = resp.list as Product[];
      this.minYD = new Intl.NumberFormat().format(resp.list[0].fixed_price);
      this.avgYD = this.getAVG(this.lstYD.slice(0, 5));
      this.dataSourceYellowDiamond = new MatTableDataSource<Product>(this.lstYD);
      this.dataSourceYellowDiamond.paginator = this.paginator;
      this.dataSourceYellowDiamond.sort = this.sort;

    });

  }
  getPotionPrice() {
    this.service.getPotionType().subscribe(resp => {
      this.lstPotion = resp.list as Product[];
      this.minPotion = new Intl.NumberFormat().format(resp.list[0].fixed_price);
      this.avgPotion = this.getAVG(this.lstPotion.slice(0, 5));
    });

  }
  getAVG(type: any) {
    var a = 0;
    for (var val of type) {
      a += Number(val.fixed_price);
    }
    return new Intl.NumberFormat().format(this.avg = a / 5);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/