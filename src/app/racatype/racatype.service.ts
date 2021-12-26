import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Nft } from './nfts';
import { NftDetail } from './nftdetail';
import { Product } from './products';

@Injectable()
  export class RacaTypeService {
    requestUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType&tokenId=-1';  // URL to web api
    racaPriceURL = 'https://api.coingecko.com/api/v3/simple/price?ids=radio-caca&vs_currencies=usd';
    btcPriceURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    requestYellowDiamondUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=16&tokenType&tokenId=0';  // URL to web api
    requestBMBMUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=18&tokenType&tokenId=-1';  // URL to web api
    requestEggUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=17&tokenType&tokenId=-1';  // URL to web api
    requestMTMUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=13&tokenType&tokenId=-1';  // URL to web api
    requestPotionUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=15&tokenType&tokenId=-1';  // URL to web api
    requestNftDetailUrl = 'https://market-api.radiocaca.com/nft-sales/';  // URL to web api


    constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getKissLandType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestUrl);
    }
    getRacaPrice(): Observable<any> {
      return this.http.get<any>(this.racaPriceURL);
    }
    getBTCPrice(): Observable<any> {
      return this.http.get<any>(this.btcPriceURL);
    }
    getYellowType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestYellowDiamondUrl);
    }
    getBMBMType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestBMBMUrl);
    }
    getEggType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestEggUrl);
    }
    getMTMType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestMTMUrl);
    }
    getPotionType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestPotionUrl);
    }
    getNftDetaiType(id : any): Observable<any> {
      return this.http.get<any>(this.requestNftDetailUrl + id);
    }

  }