import { Component } from '@angular/core';
import { AfficherService } from '../Services/afficher.service';

@Component({
  selector: 'app-avenir',
  templateUrl: 'avenir.page.html',
  styleUrls: ['avenir.page.scss']
})
export class AvenirPage {
  type = 'deposit';
  content: number = 1;
  activeOption = 1;
  challengeEncours: any;
  challengeTerminer: any;
  challengeAvenir: any;
  decroissant: any;

  showContent(opt: number) {
    this.content = opt;
}

  constructor( private serviceAfficher:AfficherService) { }


  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallengeAvenir().subscribe(data => {
      this.challengeAvenir = data;
    });
    this.serviceAfficher.afficherChallengeEncours().subscribe(data => {
      this.challengeEncours = data;
      
    });
    this.serviceAfficher.afficherChallengeTerminer().subscribe(data => {
      this.challengeTerminer = data;
     
    });
    this.serviceAfficher.afficherChallengeDecroissant().subscribe(data => {
      this.decroissant = data;
     
    });
  // }
  // ngDoCheck() {
  //   if (this.data !== this.previousData) {
  //       this.previousData = this.data;
  //       // Traitement des données
  //   }
}
segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}

}
