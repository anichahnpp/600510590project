import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './environment';
import { AuthService } from './auth.service';
import { FirebaseService } from './firebase.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';




const appRoute = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent },
  {path:'productlist/:productId', component: ProductListComponent}
]

@NgModule({

  imports:      [  Ng2SearchPipeModule,BrowserModule, FormsModule, RouterModule.forRoot(appRoute), AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  declarations: [ AppComponent, HomeComponent, RegisterComponent, LoginComponent, NavBarComponent, ProductListComponent, CartComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [, AuthService, FirebaseService,   ]
})
export class AppModule { }
