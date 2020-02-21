import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent {
  userForm : FormGroup;
  constructor(
    private user : UserService,
    public fb: FormBuilder) {
      this.userForm = this.fb.group({
        name : ['', Validators.required],
        age : ['', Validators.required],
        position : ['', Validators.required],
        city : ['', Validators.required],
     });
    }
 
    onSubmit(){
    this.user.createUser(this.userForm.value).subscribe((res) => {
      if(res){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New User has Created !',
        showConfirmButton: false,
        timer: 1500
      })
    }
})
  }





}
