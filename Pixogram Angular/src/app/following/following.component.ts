import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FollowService } from 'src/services/follow.service';
import { UserAuthService } from 'src/services/user-auth.service';
import { BlockService } from 'src/services/block.service';
import { Block } from 'src/model/block';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  followings: any;
  userId: number;
  followingsUserDetails;
  constructor(private titleService: Title, private router: Router, private follow: FollowService, private userService: UserAuthService, private blockService: BlockService) {
    titleService.setTitle('Following')
  }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }

    this.fetchFollowings();
  }

  fetchFollowings() {
    this.follow.getFollowings(this.userId).subscribe(response => {
      //console.log(response);
      this.followings = response;
      let length = this.followings.length;
      this.followingsUserDetails = [];
      for (let i = 0; i < length; i++) {
        this.userService.getUserById(this.followings[i].followId).subscribe(response => {
          this.followingsUserDetails.push(response);

        });
      }
      //console.log(this.followingsUserDetails);
    });
  }

  unFollow(id) {
    this.follow.unfollow(this.userId, id).subscribe(response => {
      alert("User Unfollowed successfully!!");
      this.fetchFollowings();
    })
  }

  blockUser(id) {
    this.follow.unfollow(this.userId,id).subscribe(response => {
      this.fetchFollowings();
    })
    this.blockService.blockUser(new Block(this.userId, id)).subscribe(res => {
      alert("User Blocked!!");
    }, err => {
      alert("Error");
    });
  }

}