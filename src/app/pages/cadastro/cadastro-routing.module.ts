import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { AtivacaoComponent } from './ativacao/ativacao.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'dados-pessoais',
    },
    {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent
    },
    {
        path: 'ativacao',
        component: AtivacaoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule { }
