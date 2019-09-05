import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IsTelefone } from 'src/app/validates/telefone-validate';
import { IsFullName } from 'src/app/validates/full-name-validate';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder, private navCtrl: NavController) { }

    ngOnInit() {
        this.validarForm();
    }

    validarForm() {
        this.form = this.fb.group({
            nome: ['', [Validators.required, IsFullName]],
            celular: ['', [Validators.required, IsTelefone]],
            senha: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    get nome() { return this.form.get('nome'); }
    get sobrenome() { return this.form.get('sobrenome'); }
    get celular() { return this.form.get('celular'); }
    get senha() { return this.form.get('senha'); }

    enviar() {
        this.navCtrl.navigateForward('cadastro/ativacao');
    }

}
