import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import {Router} from '@angular/router';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData={
    /*username: String,
    email: String,
    password: String,
    number:Number*/
  }
  constructor(private router: Router , private _auth: AuthService) { }

  ngOnInit(): void {
  }
registerUser()
{
  this._auth.registerUser(this.registerUserData).subscribe(

    res=> {
      console.log(res),
      localStorage.setItem('token',res.token)
      this.router.navigate(['/login'])
    },
    err=>console.log(err)
  )



}
}
