import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SuperStoreService } from './superstore-service.service';
import { Sale } from './superstore-model';

@Component({
  selector: 'app-superstore',
  templateUrl: './superstore.component.html',
  styleUrls: ['./superstore.component.css'],
  providers:[SuperStoreService]
})
export class SuperstoreComponent implements OnInit {
  sales:Observable<Sale[]>;
  constructor(private _superStoreService: SuperStoreService) { }

  ngOnInit() {
    this.sales = this._superStoreService.getAllSales();
  }

}
