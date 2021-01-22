import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';



@NgModule({
  declarations: [MeuFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule

  ],
  exports: [MeuFormComponent]
})
export class MeuFormModule { }
