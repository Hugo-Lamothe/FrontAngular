import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Limber';
  styles = {}

  afficherCampagne: boolean = false;

  campagne() {
    this.afficherCampagne = !this.afficherCampagne;
    this.styles = {
      color: "#2a7a93",
      "font-weight": "bold",
      "background-color": "#eef4f6",
      "border-radius": "30px"
    };
  }
}
