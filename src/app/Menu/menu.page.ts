import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConxexionPage } from '../conxexion/conxexion.page';
import { InscriptionPage } from '../inscription/inscription.page';
import { ConnexionService } from '../Services/connexion.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {


  form: any = {
    usernameOrEmail: null,
    password: null
  };
  connexionReussi = false;
  connexionEchoue = false;
  messageErreur = '';

  currentUser: any;
  isLoggedIn: any;
  role: any;
  showAdminBoard: any;
  showModeratorBoard: any;
  username: any;

  eventBusService: any;

  roles: string[] = [];
  constructor(private connexion: ConnexionService,
    private storage: StorageService,
    private router: Router,private modalCtrl: ModalController) { }

  ngOnInit(): void {

    if (this.storage.connexionReussi()) {
      this.connexionReussi = true;
      this.roles = this.storage.recupererUser().roles;
    }

    this.currentUser = this.storage.recupererUser();
    console.table(this.currentUser);
    var moi = this.currentUser.id;

    console.log("je suis id user" + moi);

    this.isLoggedIn = this.storage.connexionReussi();

    if (this.isLoggedIn) {
      const user = this.storage.recupererUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }







  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.connexion.logout().subscribe({
      next: res => {
        console.log(res);
        this.storage.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConxexionPage
    });
    return await modal.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async openModal2() {
    const modal = await this.modalCtrl.create({
      component: InscriptionPage
    });
    return await modal.present();
  }

  closeModal2() {
    this.modalCtrl.dismiss();

  }


}

function ionViewDidEnter() {
  throw new Error('Function not implemented.');
}

