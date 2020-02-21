import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService{

  evnUrl = ENV.url;

  constructor(
      private http : HttpClient
 ) { }


  getUser(){
      return this.http.get(this.evnUrl+'/students');
  }

  deleteUser(userId){
    return this.http.delete(this.evnUrl+'/students/'+userId)
  }

  createUser(newUser){
    debugger
    return this.http.post(this.evnUrl+'/students/',newUser)
  }

}