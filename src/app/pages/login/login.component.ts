import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Http,Headers,RequestOptions } from "@angular/http/";
import { Router } from "@angular/router";
import {api} from "../api"
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  ngOnInit(): void {
      if (localStorage.getItem("logged")==="true"){
              this.router.navigate(["dashboard"]);
      }
  }

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private http:Http,private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
       let headers = new Headers({"Content-Type": "application/json"});
       let options = new RequestOptions({headers : headers});
      this.http.post(api+ "Users/login",values,options).map(res=>res.json())
      .subscribe(
          data => this.handle(data),
          error => console.error(error)
      )
    }
  }
  handle(data){
      console.log(data);
      localStorage.setItem("id",data.id);
      localStorage.setItem("logged","true");
      this.router.navigate(["dashboard"]);

  }
}
