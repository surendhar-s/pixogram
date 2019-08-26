import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FollowService } from 'src/services/follow.service';
import { UserAuthService } from 'src/services/user-auth.service';
import { Block } from 'src/model/block';
import { BlockService } from 'src/services/block.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;
  userId: number;
  followersUserDetails;
  constructor(private titleService: Title, private router: Router, private follow: FollowService, private userService: UserAuthService, private blockService: BlockService) { 
    titleService.setTitle('Followers')
  }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.fetchFollowers();
  }
  fetchFollowers() {
    this.follow.getFollowers(this.userId).subscribe(response => {
      //console.log(response);
      this.followers = response;
      let length = this.followers.length;
      this.followersUserDetails = [];
      // //console.log(this.followers);
      for (let i = 0; i < length; i++) {
        this.userService.getUserById(this.followers[i].userId).subscribe(response => {
          this.followersUserDetails.push(response);
        });
      }
      //console.log(this.followersUserDetails);
    });
  }

  blockUser(id) {
    this.follow.unfollow(id,this.userId).subscribe(response => {
      this.fetchFollowers();
    })
    this.blockService.blockUser(new Block(this.userId, id)).subscribe(res => {
      alert("User Blocked!!");
    }, err => {
      alert("Error");
    });
  }
}
