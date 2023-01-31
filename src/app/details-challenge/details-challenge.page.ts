import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  content: number = 1;
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
  iduser1:any;

  showContent(opt: number) {
    this.content = opt;
}

  constructor(private route: Router, private routes: ActivatedRoute, private serviceAfficher: AfficherService,
    private serviceAjouter: AjouterServiceService,private storage: StorageService,) { }


  ngOnInit() {

    this.currentUser = this.storage.recupererUser();
    console.table(this.currentUser);
    var moi = this.currentUser.id;
    this.idChallenge = this.routes.snapshot.params['idChallenge']
    
    this.serviceAfficher.afficherParIdChallenge(this.idChallenge).subscribe(data => {
      this.idChallenge = data;
      this.titre = data.titre;
      this.description = data.description;
      this.datefin = data.datefin;
      this.cate=data.cate[0].nom;
      this.photo=data.photo;
      this.datedebut=data.datedebut;
    
    })
    this.serviceAfficher.afficherCritereParIdChallenge(this.idChallenge).subscribe(data=>{
      this.critere=data
      console.log("je suis la"+ JSON.stringify(this.critere));
    })

    this.equipe = new FormGroup({
      nom: new FormControl(''),
    })
    
    this.currentUser = this.storage.recupererUser();
    console.table(this.currentUser);
     this.iduser1 = this.currentUser.id;

    console.log("je suis id user mes ids" + this.iduser1);

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
  onSubmitEquipe(){
    if (this.equipe.valid) {
      const formData = new FormData();
      formData.append('teamName', this.equipe.value.nom);
      formData.append('creator',this.iduser1);
      formData.append('challenge',this.idChallenge);
      this.serviceAjouter.AjouterTeam(formData).subscribe((data: any) => {
        console.log(data);
    console.log("je suis derriere les autres ajourf'hui")    
    });
    } else {
    console.log( "Tous les champs champs sont obligatoirs !!");

    }
  }
  iduser(arg0: string, iduser: any) {
    throw new Error('Method not implemented.');
  }

}
