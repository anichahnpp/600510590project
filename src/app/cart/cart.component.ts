import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartList: any;
  constructor(
    private fireService: FirebaseService,
    private auth: AuthService
    ) {}

  ngOnInit() {
     this.fireService.getToCart(this.auth.getCerrentUser()).subscribe( res => { 
       console.dir(res)

      this.cartList = this.fireService.getProductFromProductList(res.productList)
      })
  }


  onDeleteCart(id,name) {
    this.fireService.deleteCart(id,name, this.auth.getCerrentUser())
  }
}
