import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastrarOrigemComponent } from './cadastrar-origem/cadastrar-origem.component';
import { CadastrarDestinoComponent } from './cadastrar-destino/cadastrar-destino.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FiltroComponent } from './filtro/filtro.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lista',
    },
    {
        path: 'lista',
        component: ListaComponent
    },
    {
        path: 'detalhes',
        component: DetalhesComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastrar-origem',
        component: CadastrarOrigemComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastrar-destino',
        component: CadastrarDestinoComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'filtro',
        component: FiltroComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViagemRoutingModule { }
