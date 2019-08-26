import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Media } from 'src/model/media';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {

  mediaDetails: Media;
  description: String;
  tags: String;

  constructor(private dataService: DataService, private titleService: Title) {
    titleService.setTitle('Media Details');
   }

  ngOnInit() {
    this.dataService.mediaDetails$.subscribe((m) => this.mediaDetails = m);
    this.description = this.mediaDetails.description;
    this.tags = this.mediaDetails.tags;
  }

  onSubmit() {

  }
}
