import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private subscriptionProducts: Subscription | null = null;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.subscriptionProducts = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }

  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
  }

  // addToCart(title: string): void {
  //   this.cartService.product = title;
  // this.router.navigate(['/order', {product: title}]);
  //   this.router.navigate(['/order'], {queryParams:{product: title}});
  // }

}
