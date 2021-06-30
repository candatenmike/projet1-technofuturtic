export class Produit {
    id:number;
    categorie:number;
    nom:string;
    prix:number;
    stock:number;
    image:string;
    constructor(data:any){
        this.id=data.id;
        this.categorie=data.categorie;
        this.nom=data.nom;
        this.prix=data.prix;
        this.stock=data.stock;
        this.image=data.image; 
    }
}