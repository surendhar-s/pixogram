import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/model/media';
import { DataService } from 'src/services/data.service';
import { UserAuthService } from 'src/services/user-auth.service';
import { User } from 'src/model/user';
import { MediaService } from 'src/services/media.service';

@Component({
  selector: 'app-media-holder-card',
  templateUrl: './media-holder-card.component.html',
  styleUrls: ['./media-holder-card.component.css']
})
export class MediaHolderCardComponent implements OnInit {

  @Input()
  mediaDetails: Media;
  name: String;
  user: User;

  constructor(private dataService: DataService,private userService:  UserAuthService) {
  }

  ngOnInit() {
    this.userService.getUserById(this.mediaDetails.userId).subscribe(result=>{
      this.user=result;
      this.name=result.name;
    });
  }

  sendMediaDetails(id){
    //console.log(id);
    this.dataService.sendMediaDetails(this.mediaDetails);
  }

}
