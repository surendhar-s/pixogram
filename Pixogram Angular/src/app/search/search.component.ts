import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/services/search.service';
import { User } from 'src/model/user';
import { FollowService } from 'src/services/follow.service';
import { Follow } from 'src/model/follow';
import { BlockService } from 'src/services/block.service';
import { Block } from 'src/model/block';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: String;
  users: User[];
  userId = parseInt(localStorage.getItem("userId"));
  constructor(private router: Router, private searchService: SearchService, private followService: FollowService, private blockService: BlockService) { }

  ngOnInit() {
  }

  searchUser() {
    this.searchService.searchUser(this.userId, this.value).subscribe(response => {
      this.users = response;
    });
    // this.searchService.searchFollowUser(this.userId,this.value).subscribe(response =>{
    //   this.users.concat(response);
    // });
  }

  follow(id: String) {
    let followId: number;
    followId = parseInt(id.toString());
    this.userId = parseInt(this.userId.toString());
    let follow: Follow = new Follow(this.userId, followId);
    this.followService.follow(follow).subscribe(response => {
      this.searchUser();
    }, error => {
        //console.log(error);
      })
  }

  blockUser(id){
    this.blockService.blockUser(new Block(this.userId,id)).subscribe(res=>{
        alert("User Blocked!!");
        this.searchUser();
      },err=>{
        alert("Error");
      });
    }
    

  // unFollow(id: String){
  //   let followId: number;
  //   followId = parseInt(id.toString());
  //   this.userId=parseInt(this.userId.toString());
  // }

}
