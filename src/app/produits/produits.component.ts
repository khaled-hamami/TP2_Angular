import { Component, OnInit } from '@angular/core';
import { Produit } from '../add-produit/model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private produitsService: ProduitService) {
    this.produits = [];
  }

  ngOnInit(): void {
    this.produits = this.produitsService.listeProduites();
  }
}
