import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaPage } from './esqueci-senha.page';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {}
