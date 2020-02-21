import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    loginForm: FormGroup;
    constructor( public fb: FormBuilder){
        this.loginForm = this.fb.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
          });
    }

    ngOninit(){
        
    }

    onSubmit(){
        this.loginForm.value;
        debugger
    }
}