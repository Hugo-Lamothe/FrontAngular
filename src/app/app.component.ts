import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Limber';

  afficherCampagne: boolean = false;

  campagne() {
    this.afficherCampagne = !this.afficherCampagne;
  }
}
