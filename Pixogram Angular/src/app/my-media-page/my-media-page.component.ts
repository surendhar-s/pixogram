import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/model/media';
import { MediaService } from '../../services/media.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-my-media-page',
  templateUrl: './my-media-page.component.html',
  styleUrls: ['./my-media-page.component.css']
})
export class MyMediaPageComponent implements OnInit {

  medias: Media[];
  userId: number;


  constructor(private titleService: Title, private router: Router, private mediaService: MediaService) {
    titleService.setTitle('Media')
  }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.userId = parseInt(userId);
    this.mediaService.getMedias(this.userId).subscribe(response => this.handleResponse(response));
  }
  handleResponse(response) {
    //console.log(response)
    this.medias = response;
    for (let i = 0; i < this.medias.length; i++) {
      let oldUrl = this.medias[i].url;
      //console.log(oldUrl);
      //console.log(this.medias[i].url);
    this.medias[i].url = `http://localhost:8080/${oldUrl}`
    //console.log(this.medias[i].url);
    }
  }

}
