import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../products.interface';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  private product: Product;

  public url:string;
  public id:any;

  constructor(private productsService:ProductsService, private activatedRoute:ActivatedRoute, private router: Router) {

    this.id = activatedRoute.snapshot.params.id || null;
    this.url = activatedRoute.snapshot.url[0].path;
    // console.log(activatedRoute.snapshot.url);
    this.product = {_id: this.id || "", title:"", description:""}
  }

  ngOnInit() {

      if (this.url !== "new") {
        this.productsService.get(this.id).subscribe(
          res => this.product = res.data,
          err => console.error(err),
        );
      }
  }

  public create() {
    console.log(this.product)
    if ( !this.validate(() => {
        //show notify*/
        console.error({message:'All fields are required!'}) })
    ) return false;


    delete this.product._id;
    this.productsService.create(this.product).subscribe(
      res => this.navigateToList(res),
      err => console.error(err)
    )
  }

  public update() {
    if ( !this.validate(() => {
        //show notify*/
        console.error({message:'All fields are required!'}) })
    ) return false;

    this.productsService.update(this.id, this.product).subscribe(
      res => this.navigateToList(res),
      err => console.error(err)
    )
  }

  private validate(callback?:Function) {

    const val = ( this.product.title && this.product.title && this.product.description  );

    if (callback && !val) callback();

    return val;

  }

  private navigateToList(data) {

    //show notification

    this.router.navigate(['./products']);
  }

}
