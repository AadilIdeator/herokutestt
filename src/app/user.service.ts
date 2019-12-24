import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
 register(body:any){
   return this._http.post('api/contacts/addcontact',body,{
     observe:'body',
     headers:new HttpHeaders().append('Content-Type','application/json')
   });
 }
}
