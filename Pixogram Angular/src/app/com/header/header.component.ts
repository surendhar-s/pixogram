import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  invalidLogin: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("userId");
    this.router.navigate(['sign-in']);
  }

}
