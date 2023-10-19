import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  jsonData: any;
  startIndex: number = 0;
  numPage: String = "1/2";
  search: string = '';
  maxAffichage: number = 5;
  afficheActu: number = 0;

  constructor(
    private jsonService: JsonService,
  ) { }

  ngOnInit(): void {
    this.jsonService.getProduits().subscribe(data => {
      this.jsonData = data;
    });
  }

  updateDataSlice(start: number): void {
    this.startIndex = start;

    if (start == 0){
      this.numPage = "1/2"
    }else{
      this.numPage = "2/2"
    }
  }

}
