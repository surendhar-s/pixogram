import { Component, OnInit } from '@angular/core';
import { Media } from 'src/model/media';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaService } from 'src/services/media.service';

@Component({
  selector: 'app-following-media',
  templateUrl: './following-media.component.html',
  styleUrls: ['./following-media.component.css']
})
export class FollowingMediaComponent implements OnInit {

  medias: Media[];
  userId: number;
  constructor(private titleService: Title, private router: Router, private mediaService: MediaService) {
    titleService.setTitle('Users Post');
  }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.userId = parseInt(userId);
    this.mediaService.getMediasOfFollowing(this.userId).subscribe(response => this.handleResponse(response));
  }

  handleResponse(response) {
    //console.log(response)
    this.medias = response;
    for (let i = 0; i < this.medias.length; i++) {
      let oldUrl = this.medias[i].url;
    this.medias[i].url = `http://localhost:8080/${oldUrl}`;
    }
  }
}
