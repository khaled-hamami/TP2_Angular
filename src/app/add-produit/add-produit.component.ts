import { Component } from '@angular/core';
import { Produit } from './model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent {
  newProduit = new Produit();
  message: string = '';
  constructor(private produitService: ProduitService) {}
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
    this.message = `produit ${this.newProduit.nomProduit} ajouter avec succes`;
  }
}
