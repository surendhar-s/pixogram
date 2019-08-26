import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/services/user-auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  rPassword: String;
  rForm: FormGroup;
  validUser: Boolean = true;

  constructor(private titleService: Title, private router: Router, private loginService: UserAuthService, private fb: FormBuilder) { 
    titleService.setTitle('Sign up into pixogram!!!')
    this.onFormSubmit();
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = new User(this.username, this.email, this.password);
    this.checkUserName();
    if(this.validUser)
    this.loginService.registerUser(user).subscribe(response => {
      //console.log(response)
      alert('User registered successfully!!!!')
      this.router.navigate(['sign-in'])
    });
  }

  onFormSubmit(){
    this.rForm=this.fb.group({
      'username': [this.username, Validators.compose([Validators.required])],
      'password': [this.password, Validators.compose([Validators.required, Validators.minLength(5)])],
      'rpassword': [this.rPassword, Validators.compose([Validators.required])],
      'email': [this.email, Validators.compose([Validators.email, Validators.required])]
    },
    {validator: this.passwordMatchValidator}
    )
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['rpassword'].value ? null : {'mismatch': true};
  }

  checkUserName(){
    //console.log(this.validUser);
    this.loginService.checkUser(this.username).subscribe(response => this.validUser=response);
    //console.log(this.validUser);
  }
}
