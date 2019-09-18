import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostListComponent} from "./post-list/post-list.component";
/**
 * Created by riti on 16/09/19.
 */


const routes: Routes = [
  {
    path: '/',
    component: PostListComponent
  },
  {
    path:'post'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class USersRoutingModule { }

