import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpclient:HttpClient) { }
  public getall(){
    return this.httpclient.get('http://localhost:8000/api/produit');
  }

  public getone(id: any){
    return this.httpclient.get('http://localhost:8000/api/produit/id/'+id);
  }
}
