import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  confirmpassword:string;


  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  onRegister(){
    if(this.password === this.confirmpassword){
      this.auth.register(this.email, this.password)
    }
    else{
      alert('your password doesnt match')
    }

  }
}