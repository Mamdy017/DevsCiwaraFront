import { Component, OnInit } from '@angular/core';
import { AfficherService } from '../Services/afficher.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {

  constructor( private serviceAfficher:AfficherService) { }

  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallenge().subscribe(data => {
      this.challenge = data;
      console.table(this.challenge);
    });
  }

}
