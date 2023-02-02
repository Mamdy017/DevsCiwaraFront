import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  type = 'deposit';
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
private storage: StorageService,private http: HttpClient
) {}
form !:FormGroup


ngOnInit() {

this.form = new FormGroup({
  lienGithub: new FormControl('', Validators.required),
  point: new FormControl('', Validators.required),
  source: new FormControl('', Validators.required),
  fileSource: new FormControl('', [Validators.required])
});
this.currentUser = this.storage.recupererUser();
console.table(this.currentUser);
var moi = this.currentUser.id;
this.idChallenge1 = this.routes.snapshot.params['idChallenge1'];

this.serviceAfficher.afficherParIdChallenge(this.idChallenge1).subscribe(data => {
  this.idChallenge = data;
  this.titre = data.titre;
  this.description = data.description;
  this.datefin = data.datefin;
  this.cate = data.cate[0].nom;
  this.photo = data.photo;
  this.datedebut = data.datedebut;

});
this.serviceAfficher.afficherCritereParIdChallenge(this.idChallenge1).subscribe(data => {
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

}
uploadFilec(files: FileList) {
  this.form.value.source.setValue(files.item(0));
}
uploadFile(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];

    this.form.patchValue({
      fileSource: file

    });
  }
}
submit() {
  const formData = new FormData();
  formData.append('lienGithub', this.form.value.lienGithub);
  formData.append('source', this.form.value.fileSource, this.form.value.fileSource.name);
  formData.append('point', this.form.value.point);
console.log("hfhfh"+this.form.value.fileSource.name )
  this.http.post<any>(`http://localhost:8080/devs/auth/solution/ajout/7/10/6`, formData)
    .subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
}


segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}

}
function saveAs(body: any, fileName: string) {
  throw new Error('Function not implemented.');
}

