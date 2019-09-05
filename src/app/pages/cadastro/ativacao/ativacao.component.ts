import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-ativacao',
    templateUrl: './ativacao.component.html',
    styleUrls: ['./ativacao.component.scss'],
})
export class AtivacaoComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder, private navCtrl: NavController) { }

    ngOnInit() {
        this.validarForm();
    }

    validarForm() {
        this.form = this.fb.group({
            cod_ativacao: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
    }

    get cod_ativacao() { return this.form.get('cod_ativacao'); }

    enviar() {
        this.navCtrl.navigateForward('lista');
    }
}
