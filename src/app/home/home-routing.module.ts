/**
 * Created by riti on 16/09/19.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users/users.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostDetailsComponent} from "./post-details/post-details.component";



const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    children: [
    {
      path: '',
      component: UsersComponent
    },
    {
      path: ':userId/posts',
      component: PostListComponent
    },
    {
      path: ':userId/posts/:postId',
      component: PostDetailsComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

