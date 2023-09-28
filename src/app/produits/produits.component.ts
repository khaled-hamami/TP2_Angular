import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: string[];

  constructor() {
    this.produits = ['PC Asus', 'Imprimante Epson', 'Tablette Samsung'];
  }
  //this i added myself because it was required for onInit event
  ngOnInit(): void {}
}
