import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/services/user-auth.service';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: String;
  password: String;
  invalidLogin: boolean = false;
  users: User;
  rForm: FormGroup;

  constructor(private titleService: Title, private router: Router, private loginService: UserAuthService, private fb: FormBuilder) {
    titleService.setTitle('Welcome to #1 Social media PIXOGRAM')
    this.onFormSubmit();
  }

  ngOnInit() {
    this.loginService.getUsers().subscribe(response => this.users = response, error => alert(`Invalid response from server!!!`));
  }

  onSubmit() {

    //console.log("On Submit function");

    this.loginService.checkLogin(this.username, this.password).subscribe((result) => {
      this.users = result
      this.router.navigate(['following-media'])
      this.invalidLogin = false
      //console.log(this.users)
      localStorage.setItem("userId",
        this.users.id.toString());
      localStorage.setItem("userEmail",
        this.users.email.toString());
      localStorage.setItem("userName",
        this.users.name.toString());
    },
      error => {
        //console.log(error.message);
        this.invalidLogin = true
      });
  }


  onFormSubmit() {
    this.rForm = this.fb.group({
      'username': [this.username, Validators.required],
      'password': [this.password, Validators.required]
    })
  }
}
