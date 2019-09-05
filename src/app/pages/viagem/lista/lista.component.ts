import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/api/login/login.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

    logado: any;

    constructor(
        private loginService: LoginService,
        private alertCtrl: AlertController,
        private navCtrl: NavController) { }

    ngOnInit() {
        this.logado = this.loginService.isLogged();
    }

    detalhes() {
        if (this.logado) {
            this.navCtrl.navigateRoot('/detalhes');
        } else {
            this.exbirAlertaConfirmacao();
        }
    }

    cadastrar() {
        if (this.logado) {
            this.navCtrl.navigateRoot('/cadastrar-origem');
        } else {
            this.exbirAlertaConfirmacao();
        }
    }

    filtro() {
        if (this.logado) {
            this.navCtrl.navigateRoot('/filtro');
        } else {
            this.exbirAlertaConfirmacao();
        }
    }

    async exbirAlertaConfirmacao() {
        const alert = await this.alertCtrl.create({
            header: 'Opa!',
            subHeader: 'Não é possível ver os detalhes dessa viagem sem logar no app.',
            message: 'Se você já tem cadastro realize o acesso no sistema, caso ainda não tenha cadastre-se.',
            buttons: [
                {
                    text: 'Não quero',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Botão cancel pressionado');
                    }
                }, 
                {
                    text: 'Entendi',
                    handler: () => {
                        this.navCtrl.navigateRoot('/login');
                    }
                }
            ]
        });

        await alert.present();
    }
}
