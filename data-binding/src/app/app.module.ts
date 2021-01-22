
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './data-binding/meu-form/meu-form.module';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './data-binding/output-property/output-property.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
