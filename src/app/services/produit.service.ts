import { Injectable } from '@angular/core';
import { Produit } from '../add-produit/model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[];
  constructor() {
    console.log('creation du service produit')
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'Pc Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2020'),
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  listeProduites(): Produit[] {
    return this.produits;
  }
  ajouterProduit(produit:Produit) {
this.produits.push(produit)
  }
}
