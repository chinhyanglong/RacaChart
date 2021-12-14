import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../racatype/products';
import { RacaTypeService } from '../racatype/racatype.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  lstProduct : Product[] = [];
  nameType : any;
  columns: string[] = ['id', 'fixed_price','image_url','status'];
  dataSource : any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private service: RacaTypeService) { }
    ngOnInit() {
        this.getChartPrice();
    }
    getChartPrice() {
      this.service.getRacaType().subscribe(resp=>{
        this.lstProduct = resp.list as Product[];
        this.nameType = resp.list[0].name;
        this.dataSource = new MatTableDataSource<Product>(this.lstProduct);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      });
      
    }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/