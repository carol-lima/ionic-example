import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-esqueci-senha',
    templateUrl: './esqueci-senha.page.html',
    styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder, private navCtrl: NavController) { }

    ngOnInit() {
        this.validarForm();
    }

    validarForm() {
        this.form = this.fb.group({
            celular: ['', [Validators.required]],
        });
    }

    get celular() { return this.form.get('celular'); }

    enviar() {

    }
}
