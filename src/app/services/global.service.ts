import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiHostName: string = 'http://localhost:5005';
  authRoute: string = '/app/v1/auth';
  categoriesRoute: string = '/app/v1/categories';
  subcategoriesRoute: string = '/app/v1/subcategories';
  productsRoute: string = '/app/v1/products';
  couponsRoute: string = '/app/v1/coupons';
  orderRoute: string = '/app/v1/orders';
  reviewsRoute: string = '/app/v1/reviews';
  usersRoute: string = '/app/v1/users';
  productsImages: string = `${this.apiHostName}/products/`
  userImage: string = `${this.apiHostName}/users/`
  constructor() { }
}
