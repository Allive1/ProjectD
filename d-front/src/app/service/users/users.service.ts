import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  SERVER_URL: string = "http://localhost:4200/api/"
  constructor(private httpClient: HttpClient) { }

  public getUsers(){
  return this.httpClient.get(this.SERVER_URL + 'users')
  }
  public getUser(userId){
  return this.httpClient.get(`${this.SERVER_URL + 'users'}/$userId`)
  }
  public createUser(user: {id: number, name: string, description: string}){
  return this.httpClient.post(`${this.SERVER_URL + 'users'}`, user)
  }
  public deleteUser(userId){
  return this.httpClient.delete(`${this.SERVER_URL + 'users'}/$userId`)
  }
  public updateUser(user: {id: number, name: string, description: string}){
  return this.httpClient.put(`${this.SERVER_URL + 'users'}/$userId`, user)
  }
}
