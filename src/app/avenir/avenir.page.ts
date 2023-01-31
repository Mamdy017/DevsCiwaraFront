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
  challengeEncours: any;
  challengeTerminer: any;
  challengeAvenir: any;

  showContent(opt: number) {
    this.content = opt;
}

  constructor( private serviceAfficher:AfficherService) { }


  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallengeAvenir().subscribe(data => {
      this.challengeAvenir = data;
      console.table(this.challenge);
    });
    this.serviceAfficher.afficherChallengeEncours().subscribe(data => {
      this.challengeEncours = data;
      console.table(this.challengeEncours);
    });
    this.serviceAfficher.afficherChallengeTerminer().subscribe(data => {
      this.challengeTerminer = data;
      console.table(this.challengeTerminer);
    });
  // }
  // ngDoCheck() {
  //   if (this.data !== this.previousData) {
  //       this.previousData = this.data;
  //       // Traitement des données
  //   }
}

}
