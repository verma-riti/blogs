import { Component, OnInit } from '@angular/core';
import {PostService} from "../_providers/services/post.service";
import {isNullOrUndefined} from "util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts = [];
  public previous_offset = 0;
  public next_offset = 0 ;
  public limit = 10;
  public userId;

  constructor(private postService:PostService,
              private route: ActivatedRoute,) {

    this.route.params.subscribe((params) => {
      this.userId = params['userId']
    });
  }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    let offset = 0;
    this.postService.getAllPosts(offset, this.limit, this.userId).subscribe((res:any) =>{
      let response: any = res;
      this.posts = response;
      console.log('post 1', this.posts);
    })

  }

  public onNextClick() {
    if (!isNullOrUndefined(this.next_offset)) {
      this.postService.getAllPosts(this.next_offset, this.limit, this.userId).subscribe((res: any) => {
        var response : any = res;
        this.posts = response;
        this.next_offset += 1;
        this.previous_offset += 1;
        console.log('post next', this.posts);
      })
    }
  }

  public onPreviousClick() {
    if (!isNullOrUndefined(this.previous_offset)) {
      this.postService.getAllPosts(this.previous_offset, this.limit, this.userId).subscribe((res: any) => {
        var response : any = res;
        this.posts = response;
        this.previous_offset -= 1;
        this.next_offset -= 1;
        console.log('post prev', this.posts);
      })
    }
  }
}
