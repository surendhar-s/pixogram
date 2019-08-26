import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from 'src/services/block.service';
import { Block } from 'src/model/block';
import { UserAuthService } from 'src/services/user-auth.service';
import { User } from 'src/model/user';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-blocked-accounts',
  templateUrl: './blocked-accounts.component.html',
  styleUrls: ['./blocked-accounts.component.css']
})
export class BlockedAccountsComponent implements OnInit {

  userId: number;
  blockedUsers: Block[];
  blockedUserDetails: User[];
  toggle: Map<number, boolean>;

  constructor(private titleService: Title, private router: Router, private userService: UserAuthService, private blockService: BlockService) {
    titleService.setTitle('Blocked accounts')
   }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.getBlockedUsers();
  }

  getBlockedUsers() {
    this.blockService.getAllBlockedUsers(this.userId).subscribe(res => {
      //console.log(res);
      this.blockedUsers = res;
      let length = this.blockedUsers.length;
      this.blockedUserDetails = [];
      this.toggle = new Map<number, boolean>();
      for (let i = 0; i < length; i++) {
        //console.log(this.blockedUsers[i].blockedId);
        this.userService.getUserById(this.blockedUsers[i].blockedId).subscribe(res => {
          this.blockedUserDetails.push(res);
          this.toggle.set(res.id, true);
        });
      }
      //console.log(this.blockedUserDetails);
    });
  }

  unblockUser(blockedId) {
    this.blockService.unblockUser(this.userId, blockedId).subscribe(res => {
      //console.log(res);
      this.getBlockedUsers();
    });
    this.toggle.set(blockedId, false);
  }
  blockUser(blockedId) {
    let followObj = new Block(this.userId, blockedId);
    this.blockService.blockUser(followObj).subscribe(res => {
      //console.log(res);
      this.getBlockedUsers();
    });
    this.toggle.set(blockedId, true);
  }
}
