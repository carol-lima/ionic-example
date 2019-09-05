import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'viagem',
        pathMatch: 'full'
    },
    {
        path: 'cadastro',
        loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'viagem',
        loadChildren: () => import('./pages/viagem/viagem.module').then(m => m.ViagemModule)
    },
    { 
        path: 'login', 
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    { 
        path: 'esqueci-senha', 
        loadChildren: () => import('./pages/esqueci-senha/esqueci-senha.module').then(m => m.EsqueciSenhaPageModule)
    },
    {
        path: 'usuario',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
