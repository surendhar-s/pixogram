import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/services/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  public imagePath;
  imgURL: any;
  public message: string;

  title : String;
  description: String;
  tags: String;
  userId;
  url;
  date;

  constructor(private router: Router, private uploadService: UploadFileService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.userId = parseInt(userId);
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.preview(this.selectedFiles);
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.date = new Date();
    let dateString = `_${this.date.getTime()}_${this.date.getDate()}_${this.date.getFullYear()}`
    if (this.currentFileUpload.type == 'image/png') {
      this.url = `${this.userId}${dateString}.png`;
    }
    if (this.currentFileUpload.type == 'image/jpeg' || this.currentFileUpload.type == 'image/jpg') {
      this.url = `${this.userId}${dateString}.jpeg`;
    }
    //console.log(this.url)
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.userId, this.url, this.title, this.description, this.tags).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        //console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
    this.reload();
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  reload() {
    //console.log("Reload");
    this.router.navigate(['upload-media/single-media']);
  }
}
