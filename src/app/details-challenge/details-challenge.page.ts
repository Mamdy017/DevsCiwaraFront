import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { AfficherService } from '../Services/afficher.service';
import { AjouterServiceService } from '../Services/ajouter-service.service';
import { StorageService } from '../Services/storage.service';

@Component({
selector: 'app-details-challenge',
templateUrl: './details-challenge.page.html',
styleUrls: ['./details-challenge.page.scss'],
})
export class DetailsChallengePage implements OnInit {
equipe!: FormGroup;
content = 1;
activeOption = 1;
idChallenge: any;
titre: any;
description: any;
datefin: any;
cate: any;
datedebut: any;
photo: any;
critere: any;
currentUser: any;
iduser1!: number;
idChallenge1!: number;

showContent(opt: number) {
this.content = opt;
}

constructor(
private route: Router,
private routes: ActivatedRoute,
private serviceAfficher: AfficherService,
private serviceAjouter: AjouterServiceService,
private storage: StorageService,
) {}

ngOnInit() {
this.currentUser = this.storage.recupererUser();
console.table(this.currentUser);
var moi = this.currentUser.id;
this.idChallenge1 = this.routes.snapshot.params['idChallenge1'];

this.serviceAfficher.afficherParIdChallenge(this.idChallenge).subscribe(data => {
  this.idChallenge = data;
  this.titre = data.titre;
  this.description = data.description;
  this.datefin = data.datefin;
  this.cate = data.cate[0].nom;
  this.photo = data.photo;
  this.datedebut = data.datedebut;
});
this.serviceAfficher.afficherCritereParIdChallenge(this.idChallenge).subscribe(data => {
  this.critere = data;
});

this.equipe = new FormGroup({
  nom: new FormControl('',Validators.required),
});

this.currentUser = this.storage.recupererUser();
console.table(this.currentUser);
this.iduser1 = this.currentUser.id;
}
@ViewChild('accordionGroup', { static: true })
accordionGroup!: IonAccordionGroup;

toggleAccordion = () => {
  const nativeEl = this.accordionGroup;
  if (nativeEl.value === 'second') {
    nativeEl.value = undefined;
  } else {
    nativeEl.value = 'second';
  }
};

onSubmitEquipe() {
  const team = this.equipe.value.nom;
  const creatorId = this.iduser1;
  const challengeId = this.idChallenge1;
  this.serviceAjouter.AjouterTeam(team, creatorId, challengeId).subscribe(data => {
    console.log("mmmm"+JSON.stringify(data))
    this.equipe.reset();
  });

}}
