import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
  export class DataloadService {

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(this.extractData)
    }

    private extractData(res: Response) {
      let body = res;
      return body;
    }

  }