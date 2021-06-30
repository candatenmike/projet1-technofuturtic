import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/modeles/produit.modele';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent{
  produits = <any>[];

  constructor(private produitService: ProduitService) {
    this.produitService.getall().subscribe(produits =>{
      this.produits = produits;
      console.log(this.produits);
    });
  }
}