import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
    declarations: [
        DadosPessoaisComponent,
        EnderecoComponent
    ],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        IonicModule
    ]
})
export class UsuarioModule { }
