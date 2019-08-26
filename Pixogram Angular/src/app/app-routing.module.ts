import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UploadMediaSingleComponent } from './upload-media/upload-media-single/upload-media-single.component';
import { UploadMediaMultipleComponent } from './upload-media/upload-media-multiple/upload-media-multiple.component';
import { MyMediaPageComponent } from './my-media-page/my-media-page.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { FollowComponent } from './follow/follow.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SearchComponent } from './search/search.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { FollowingMediaComponent } from './following-media/following-media.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'upload-media', component: UploadMediaComponent,
    children: [
      { path: '', component: UploadMediaSingleComponent },
      { path: 'single-media', component: UploadMediaSingleComponent },
      { path: 'multiple-media', component: UploadMediaMultipleComponent }
    ]
  },
  { path: 'my-media-page', component: MyMediaPageComponent },
  { path: 'media-detail', component: MediaDetailComponent },
  { path: 'following-media', component: FollowingMediaComponent },
  {
    path: 'account-details', component: AccountDetailsComponent,
    children: [
      { path: '', component: AccountUpdateComponent },
      { path: 'blocked-accounts', component: BlockedAccountsComponent },
      { path: 'follow', component: FollowComponent, 
        children:[{
          path:"",pathMatch:"full",redirectTo:"following" 
        },
      { path:"followers", component:FollowersComponent},
      {
        path:"following",component:FollowingComponent},
      ]
        
      },
      { path: 'news-feed', component: NewsFeedComponent }
    ]
  },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
