import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CampagneComponent } from './components/campagne/campagne.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { FiltreRecherchePipe } from './pipe/filtre-recherche.pipe';
import { AccueilComponent } from './components/accueil/accueil.component';
import {ProduitComponent} from "./components/produit/produit.component";
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        CampagneComponent,
        FiltreRecherchePipe,
        AccueilComponent,
        ProduitComponent,
        EntrepriseComponent,
        ContactComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
