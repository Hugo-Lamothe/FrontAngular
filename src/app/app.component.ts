import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Limber';
  stylesAcc = {}
  stylesCamp = {}
  stylesProd = {}
  stylesEntre = {}
  stylesContact = {}

  afficherAccueil: boolean = true;
  afficherProduit: boolean = false;
  afficherCampagne: boolean = false;
  afficherEntreprise: boolean = false;
  afficherContact: boolean = false;

  accueil(){
    this.afficherAccueil = !this.afficherAccueil;
    if (this.afficherCampagne || this.afficherProduit || this.afficherEntreprise || this.stylesContact){
      this.afficherCampagne = false;
      this.afficherProduit = false;
      this.afficherEntreprise = false;
      this.afficherContact = false;
    }
    this.stylesCamp = {}
    this.stylesProd = {}
    this.stylesEntre = {}
    this.stylesContact = {}
    this.stylesAcc = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }

  Produit(){
    this.afficherProduit = !this.afficherProduit;
    if (this.afficherCampagne || this.afficherAccueil || this.afficherEntreprise || this.stylesContact){
      this.afficherCampagne = false;
      this.afficherAccueil = false;
      this.afficherEntreprise = false;
      this.afficherContact = false;
    }
    this.stylesCamp = {}
    this.stylesAcc = {}
    this.stylesEntre = {}
    this.stylesContact = {}
    this.stylesProd = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }

  campagne() {
    this.afficherCampagne = !this.afficherCampagne;
    if (this.afficherAccueil || this.afficherProduit || this.afficherEntreprise || this.stylesContact){
      this.afficherAccueil = false;
      this.afficherProduit = false;
      this.afficherEntreprise = false;
      this.afficherContact = false;
    }
    this.stylesAcc = {}
    this.stylesProd = {}
    this.stylesEntre = {}
    this.stylesContact = {}
    this.stylesCamp = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }

  entreprise() {
    this.afficherEntreprise = !this.afficherEntreprise;
    if (this.afficherAccueil || this.afficherProduit || this.afficherCampagne || this.stylesContact){
      this.afficherAccueil = false;
      this.afficherProduit = false;
      this.afficherCampagne = false;
      this.afficherContact = false;
    }
    this.stylesAcc = {}
    this.stylesProd = {}
    this.stylesCamp = {}
    this.stylesContact = {}
    this.stylesEntre = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }

  contact() {
    this.afficherContact = !this.afficherContact;
    if (this.afficherAccueil || this.afficherProduit || this.afficherCampagne || this.afficherEntreprise){
      this.afficherAccueil = false;
      this.afficherProduit = false;
      this.afficherCampagne = false;
      this.afficherEntreprise = false;
    }
    this.stylesAcc = {}
    this.stylesProd = {}
    this.stylesCamp = {}
    this.stylesEntre = {}
    this.stylesContact = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }
}
