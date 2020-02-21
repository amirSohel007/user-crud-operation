import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {
  userList : any;

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.getUser().subscribe((users) => {
      if (users){
        this.userList = users;
      }
    })
  }

  removeUser(userId, userName){
    this.user.deleteUser(userId).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: userName +'<br>' +  'has successfully Deleted',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
