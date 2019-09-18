import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import {UsersRoutingModule} from "./home-routing.module";
import {UserListService} from "./_providers/services/userList.service";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./_providers/services/post.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [PostListComponent, PostDetailsComponent, PageNotFoundComponent, UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    UsersRoutingModule
  ],
  providers: [UserListService, PostService]
})
export class HomeModule { }
