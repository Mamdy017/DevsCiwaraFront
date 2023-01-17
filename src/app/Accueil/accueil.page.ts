import { Component } from '@angular/core';
import { AfficherService } from '../Services/afficher.service';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss']
})
export class AccueilPage {
  constructor( private serviceAfficher:AfficherService) { }

  challenge:any;
  ngOnInit() {
    this.serviceAfficher.afficherChallengeDecroissant().subscribe(data => {
      this.challenge = data;
     
    });
  }
  options={
    SlidesPerView:4,
    centerdslider:true,
    spaceBetween:10,
    autoplay:true,
  }
}
