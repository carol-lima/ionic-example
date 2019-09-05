import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagemRoutingModule } from './viagem-routing.module';
import { CadastrarDestinoComponent } from './cadastrar-destino/cadastrar-destino.component';
import { CadastrarOrigemComponent } from './cadastrar-origem/cadastrar-origem.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';
import { IonicModule } from '@ionic/angular';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
    declarations: [
        CadastrarDestinoComponent,
        CadastrarOrigemComponent,
        DetalhesComponent,
        ListaComponent,
        FiltroComponent
    ],
    imports: [
        CommonModule,
        ViagemRoutingModule,
        IonicModule
    ]
})
export class ViagemModule { }
