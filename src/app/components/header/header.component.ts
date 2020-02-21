import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewUserComponent } from '../new-user/new-user.component';
import { UserService } from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private user : UserService ) { }

  ngOnInit(): void {
  }

  newUser(){
      this.modalRef = this.modalService.show(NewUserComponent, { class: 'modal-md' });
  }

}
