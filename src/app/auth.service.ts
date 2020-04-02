import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class AuthService {

  public isLoggedIn: boolean;

  constructor(    
  private fireAuth: AngularFireAuth,
  private route: Router,
  private fireStore: AngularFirestore) {}

  register(email: string, password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      }).then(
        res=>{
          this.setUser(this.getCerrentUser())
          this.route.navigate(["/login"])

        }
      );
  }

  getCerrentUser() {
    if (this.fireAuth.auth.currentUser) return this.fireAuth.auth.currentUser.uid
    return null 
  }

  setUser(userId: string) {
    const ref = this.fireStore.doc(`cart/${userId}`)
    const doc = {
      productList: [],
      uId: userId
    }
    return ref.set(doc,{merge:true})
  }
}
