/**
 * Created by riti on 17/09/19.
 */

import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, catchError} from "rxjs/internal/operators";


@Injectable()
export class PostService {
  postApi = environment.postListApi;

  constructor(public http: HttpClient) {
  }

  getAllPosts(offset, limit, userId) {
    let url = this.postApi +'?userId=' + userId + '&skip=' +offset + '&limit=' + limit;
    return this.http.get(url)
      .pipe(
        map(res => res),
        catchError(err => err)
      );
  }

  getPostDetails(postId){
    let url = this.postApi+ '/'+ postId;
    return this.http.get(url)
      .pipe(
        map(res => res),
        catchError(err => err)
      );
  }

  getAllComments(postId){
    let url = this.postApi + '/' + postId + '/comments';
    return this.http.get(url)
      .pipe(
        map(res => res),
        catchError(err => err)
      );
  }

  deletePost(postId) {
    let url = this.postApi+ '/'+ postId;
    return this.http.delete(url)
      .pipe(
        map(res => res),
        catchError(err => err)
      );
  }

}
