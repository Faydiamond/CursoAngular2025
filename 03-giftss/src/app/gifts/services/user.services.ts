import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { User } from '../interfaces/user';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from '../interfaces/apiresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*
  constructor(private http:HttpClient){

  }*/
 private http = inject(HttpClient)

  private baseUrl = "http://localhost:1234/api/v1";

  onLogin(obj: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.baseUrl}/login`, obj);
  }



}
