import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivasNgforComponent } from './diretivas-ngfor/diretivas-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    DiretivaNgswitchComponent,
    DiretivasNgforComponent,
    DiretivaNgclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
