import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../_providers/services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public userId;
  public postId;
  public postDetails = [];
  public comments = [];
  public show_comments = true;
  public hide_comments = false;
  constructor(private postService:PostService,
              private route: ActivatedRoute,
              public router: Router,) {

    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
      this.postId = params['postId'];
    });
  }

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails() {
    this.postService.getPostDetails(this.postId).subscribe((res:any) =>{
      let response:any = res;
      this.postDetails = response;
    })
  }

  onShowCommentsClicked() {
    this.postService.getAllComments(this.postId).subscribe((res:any) =>{
      let response:any = res;
      this.comments = response;
      this.show_comments = false;
      this.hide_comments = true;
      console.log(this.comments)
    })
  }

  onhideCommentsClicked() {
    this.show_comments = true;
    this.hide_comments = false;
  }

  onDeleteClicked() {
    if (confirm("Are you sure want to delete this post ?")) {
      this.postService.deletePost(this.postId).subscribe((res:any) =>{
        let response:any = res;
        console.log(response)
        this.router.navigate(['/']);
      })
    } else {
      return false;
    }

  }

}
