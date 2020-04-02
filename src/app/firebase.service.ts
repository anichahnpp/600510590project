import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of, Subject } from "rxjs";
import { firestore } from "firebase";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(
    private fireAuth: AngularFireAuth,
    private database: AngularFirestore
  ) {}

  register(email: string, password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert("Your registation is succesful");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  login(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  getProduct(): Observable<any> {
    var docRef = this.database.collection("product");
    return docRef.valueChanges();
  }
  getProductFromId(productId: string): Observable<any> {
    return this.database.doc(`product/${productId}`).valueChanges()
  }

  AddToCart(productId: string, productName: string, userId: string) {
    const ref = this.database.doc(`cart/${userId}`)
    
    console.log(productId)
    return ref.update({
      productList: firestore.FieldValue.arrayUnion(productId, productName)
    })
  }

getProductFromProductList(productList: String[]) {
    if (productList.length == 0) 
      return of([])
    return this.database.collection(`product` ,ref => ref.where('id','in', productList)).valueChanges()
  }

  getToCart(userId: String) {
    return this.database.doc(`cart/${userId}`).valueChanges()
  }

  deleteCart(productId: string, productName: string, userId: string) {
    const ref = this.database.doc(`cart/${userId}`)
    console.log(productId)
    return ref.update({
      productList: firestore.FieldValue.arrayRemove(productId, productName)
    })
  }
}
