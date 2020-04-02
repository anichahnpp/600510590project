import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "../firebase.service";

import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  product: any;
  loading: boolean=true;
  products: Observable<any>;
  @Input() searchText: string;
  constructor(

    private firebaseService: FirebaseService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private auth: AuthService
    ) {
    this.products = this.firebaseService.getProduct();
  }
  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
      console.log(params.movieId)
      this.firebaseService.getProductFromId(params.productId).subscribe(res => {
        this.product = res
        this.loading = false
        console.log(this.products)
      })
    }) 
  }

  // getSaveUrl(url: string): SafeResourceUrl {
  //   return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  // }

  onAddToCart(id,name) {
    this.firebaseService.AddToCart(id,name, this.auth.getCerrentUser())
  }


  }
