import { Component } from '@angular/core';
import { AfficherService } from '../Services/afficher.service';

@Component({
  selector: 'app-avenir',
  templateUrl: 'avenir.page.html',
  styleUrls: ['avenir.page.scss']
})
export class AvenirPage {

  constructor( private serviceAfficher:AfficherService) { }

  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallengeAvenir().subscribe(data => {
      this.challenge = data;
      console.table(this.challenge);
    });
  }
}
