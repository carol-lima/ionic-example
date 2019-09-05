import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/api/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private navCtrl: NavController,
        private loginService: LoginService) { }

    ngOnInit() {
        this.validarForm();
        this.loginService.logout();
    }

    validarForm() {
        this.form = this.fb.group({
            celular: ['', [Validators.required]],
            senha: ['', [Validators.required]],
        });
    }

    get celular() { return this.form.get('celular'); }
    get senha() { return this.form.get('senha'); }

    enviar() {

    }

    cadastrar() {
		this.navCtrl.navigateForward('cadastro');
	}

	esqueciSenha() {
		this.navCtrl.navigateForward('esqueci-senha');
	}
}
