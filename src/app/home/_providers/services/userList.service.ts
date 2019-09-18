/**
 * Created by riti on 17/09/19.
 */

import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, catchError} from "rxjs/internal/operators";


@Injectable()
export class UserListService {
  userApi = environment.userListApi;

  constructor(public http: HttpClient) {
  }

  getAllUsers() {
     return this.http.get(this.userApi)
      .pipe(
        map(res => res),
        catchError(err => err)
      );
  }

}
