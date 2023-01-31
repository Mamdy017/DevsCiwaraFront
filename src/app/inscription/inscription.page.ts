import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../Services/connexion.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  modal: any;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  InscriptionReussi = false;
  Inscriptionechoue = false;
  messageErreur = '';
  constructor(private inscription:ConnexionService) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss();
  }
  onSubmit(): void {
    const { nom, prenom,username,email, password } = this.form;

    this.inscription.inscription(nom, prenom,username,email, password).subscribe({
      next: data => {
        console.log(data);
        this.InscriptionReussi = true;
        this.Inscriptionechoue = false;
      },
      error: err => {
        this.messageErreur = err.error.message;
        this.Inscriptionechoue = true;
      }
    });
  }
  type = true;
  changeType() {
      this.type = !this.type;
    }
  
}
