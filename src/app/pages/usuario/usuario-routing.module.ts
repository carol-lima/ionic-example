import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dados-pessoais',
        canActivate: [AuthGuard],
    },
    {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'endereco',
        component: EnderecoComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
