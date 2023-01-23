import { Component } from '@angular/core';
import { AfficherService } from '../Services/afficher.service';

@Component({
  selector: 'app-avenir',
  templateUrl: 'avenir.page.html',
  styleUrls: ['avenir.page.scss']
})
export class AvenirPage {

  content: number = 1;
  activeOption = 1;

  showContent(opt: number) {
    this.content = opt;
}

  constructor( private serviceAfficher:AfficherService) { }


  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallengeAvenir().subscribe(data => {
      this.challenge = data;
      console.table(this.challenge);
    });
  // }
  // ngDoCheck() {
  //   if (this.data !== this.previousData) {
  //       this.previousData = this.data;
  //       // Traitement des données
  //   }
}

}
