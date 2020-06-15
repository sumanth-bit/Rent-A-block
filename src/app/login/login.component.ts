import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={
  /*  email: String,
    password: String */
  }
  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }
  loginUser()
  {
  this._auth.loginUser(this.loginUserData).subscribe(
    res=> {
      console.log(res),
      localStorage.setItem('token',res.token),
      this.router.navigate(['/home'])
    },
    err=> console.log(err)
  )
  }
}
