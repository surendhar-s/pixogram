import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {



  constructor(private titleService: Title, private router: Router) { 
    titleService.setTitle('Followers/Following')
  }

  ngOnInit() {
  }

  

 
}
