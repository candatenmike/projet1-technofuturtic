import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient:HttpClient) { }
  public getall(){
    return this.httpclient.get('http://localhost:8000/api/client');
  }

  public getone(id: any){
    return this.httpclient.get('http://localhost:8000/api/client/id/'+id);
  }
}
