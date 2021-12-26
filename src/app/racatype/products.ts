import { Properties } from "./properties";

export class Product {
  id!: number;
  name!: string;
  image_url!: string;
  sale_address!: string;
  sale_type!: string;
  status!: string;
  token_id!: string;
  fixed_price!: number;
  count!: number;
  highest_price!: number;
  score: string = '';
  level: number = -1;
  properties!: Properties[];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/