import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent{
  clients = <any>[];

  constructor(private clientService: ClientService) {
    this.clientService.getall().subscribe(clients =>{
      this.clients = clients;
      console.log(this.clients);
    });
  }
}
