import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from 'src/services/user-auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  username: String;

  constructor(private loginService: UserAuthService) { }

  ngOnInit() {
    let userId = parseInt(localStorage.getItem("userId"));
    this.loginService.getUserById(userId).subscribe(response=>this.username=response.name);
  }

}
