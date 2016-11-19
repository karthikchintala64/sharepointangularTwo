import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http' 
import 'rxjs/add/operator/map';


import { Sale } from './superstore-model';

@Injectable()
export class SuperStoreService {

  constructor(private _http: Http) { } 

  getAllSales():Observable<Sale[]>{
        return  this._http.get("https://chintalasharepoint.sharepoint.com/sites/TeamSite/_api/web/lists/getbytitle('Superstore%20Sales')/items")
              .map(
                  res => <Sale[]> res.json()
                );
  }

}
