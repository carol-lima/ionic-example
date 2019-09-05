import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputComponent } from './error-input/error-input.component';

@NgModule({
  declarations: [ErrorInputComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorInputComponent],
})
export class SharedModule { }
