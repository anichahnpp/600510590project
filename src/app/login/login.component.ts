import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password: string;


  constructor(
    private firebaseService : FirebaseService,
    private router: Router,
    private auth: AuthService,
    private afAuth : AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.firebaseService.login(this.email, this.password).then(val => {
      alert("You're login now");
      this.auth.isLoggedIn = true;
      this.router.navigate(['']);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });;
    
  }




}