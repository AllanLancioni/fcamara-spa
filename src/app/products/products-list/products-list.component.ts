import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { Product } from '../products.interface';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

declare let $:any;

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  private table: any;
  private data: Product[];

  constructor(private productsService:ProductsService, private activatedRoute:ActivatedRoute, private router: Router) {  }

  ngOnInit() {

    this.loadItems({success: res => this.initTable(res)})

  }

  initTable(res) {

    this.data = res.data;
    setTimeout( () => this.table = $('#system-base-table').DataTable(), 10);
    console.log(res);
  }

  loadItems(callbacks) {
    this.productsService.list().subscribe(
      res => callbacks.success(res),
      err => callbacks.error && typeof callbacks.error === 'function' ? callbacks.error(err) : console.error(err),
    );
  }

  refreshTable(res:{}) {
    //chamar função de notificação aqui

    this.loadItems({
      success: res => {
        this.data = res.data;
        console.log(this.table);
        this.table.destroy();
        setTimeout( () => this.table = $('#system-base-table').DataTable(), 1);
      }
    })
  }

  details($event, id:string) {
    console.log($event)
    if ($event.path && $event.path.find(el => el.classList ? el.classList.contains('delete-button') : false ) ) return;
    else if ($event.target && $event.target.classList.contains('delete-button')) return;

    this.router.navigate([`./products/${id}`]);
  }

  deleteItem(id:string) {

    if (!id) return;

    this.productsService.delete(id).subscribe(
      res => this.refreshTable(res),
      err => console.error(err)
    )
  }

}
