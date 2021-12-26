import { Properties } from "./properties";

export interface NftDetail {
  id: number;
  name: string;
  description: string;
  created_at: string;
  image_url: string;
  fixed_price: string;
  total_price: string;
  sale_address: string;
  id_in_contract: string;
  token_id: string;
  token_standard: number;
  owner: string;
  nft_address: string;
  block_chain: string;
  start_time: string;
  status: string;
  propertis: Properties[];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/