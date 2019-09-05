import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { AtivacaoComponent } from './ativacao/ativacao.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        AtivacaoComponent, 
        DadosPessoaisComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CadastroRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrMaskerModule,
        SharedModule
    ]
})
export class CadastroModule { }
