import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produitdetail',
  templateUrl: './produitdetail.component.html',
  styleUrls: ['./produitdetail.component.scss']
})
export class ProduitdetailComponent{
  produit= <any>[];
  id!: string;
  constructor(private produitService : ProduitService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.produitService.getone(this.id).subscribe(prod =>{
      this.produit = prod;
      console.log(this.produit);
    });
  }


}
