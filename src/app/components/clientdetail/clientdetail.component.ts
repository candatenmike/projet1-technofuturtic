import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss']
})
export class ClientdetailComponent{
  client= <any>[];
  id!: string;
  constructor(private clientService : ClientService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.clientService.getone(this.id).subscribe(prod =>{
      this.client = prod;
      console.log(this.client);
    });
  }


}