import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './com/header/header.component';
import { FooterComponent } from './com/footer/footer.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { MyMediaPageComponent } from './my-media-page/my-media-page.component';
import { UploadMediaSingleComponent } from './upload-media/upload-media-single/upload-media-single.component';
import { UploadMediaMultipleComponent } from './upload-media/upload-media-multiple/upload-media-multiple.component';
import { UserCardComponent } from './com/user-card/user-card.component';
import { MediaCardComponent } from './com/media-card/media-card.component';
import { MediaHolderCardComponent } from './com/media-holder-card/media-holder-card.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SearchComponent } from './search/search.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { FollowComponent } from './follow/follow.component';
import { fromEventPattern, from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { FollowingMediaComponent } from './following-media/following-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    RegisterComponent,
    MyMediaPageComponent,
    UploadMediaSingleComponent,
    UploadMediaMultipleComponent,
    UserCardComponent,
    MediaCardComponent,
    MediaHolderCardComponent,
    MediaDetailComponent,
    AccountDetailsComponent,
    AccountUpdateComponent,
    BlockedAccountsComponent,
    NewsFeedComponent,
    SearchComponent,
    UploadMediaComponent,
    FollowComponent,
    UsersComponent,
    FollowersComponent,
    FollowingComponent,
    FollowingMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
