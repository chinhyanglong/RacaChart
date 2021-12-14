import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Nft } from './nfts';

@Injectable()
  export class RacaTypeService {
    requestUrl = 'https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType&tokenId=-1';  // URL to web api
    racaPriceURL = 'https://api.coingecko.com/api/v3/simple/price?ids=radio-caca&vs_currencies=usd';
    btcPriceURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

    constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getRacaType(): Observable<Nft> {
      return this.http.get<Nft>(this.requestUrl);
    }
    getRacaPrice(): Observable<any> {
      return this.http.get<any>(this.racaPriceURL);
    }
    getBTCPrice(): Observable<any> {
      return this.http.get<any>(this.btcPriceURL);
    }

  }