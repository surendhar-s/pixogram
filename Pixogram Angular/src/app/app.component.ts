import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixo-gram';
  public constructor(private titleService: Title ) { 
    titleService.setTitle('Welcome to Worlds #1 Social media PIXOGRAM')
  }
  
}
