import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/model/user';
import { AccountUpdateService } from 'src/services/account-update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  rForm: FormGroup;
  password: String;
  rPassword: String;
  email: String;
  userId: String;
  userName: String;
  constructor(private titleService: Title, private updateService: AccountUpdateService, private fb: FormBuilder, private router: Router) {
    titleService.setTitle('Update account details');
    this.onFormSubmit();
    this.email = localStorage.getItem('userEmail');
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem("userName");
  }

  onSubmit() {
    let user: User = new User(this.userName, this.email, this.password);
    user.id = parseInt(this.userId.toString());
    this.updateService.accountUpdate(user).subscribe((response) => {
      alert("Account details updated successfully!!!")
      this.router.navigate(["my-media-page"]);
    });
  }

  onFormSubmit() {
    this.rForm = this.fb.group({
      'password': [this.password, Validators.compose([Validators.required, Validators.minLength(5)])],
      'rPassword': [this.rPassword, Validators.compose([Validators.required])],
      'email': [this.email, Validators.compose([Validators.email, Validators.required])]
    },
      { validator: this.passwordMatchValidator }
    )
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['rPassword'].value ? null : { 'mismatch': true };
  }

  ngOnInit() {
  }

}
