import { Component, OnInit } from '@angular/core';
import {UserListService} from "../_providers/services/userList.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  constructor(private userListService: UserListService,) { }

  ngOnInit() {
    this.getUserList()
  }

  getUserList(){
    this.userListService.getAllUsers().subscribe((res: any) =>{
      let response: any = res;
        this.users = response;
    })
  }
}
