import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { 
 
  }
}
