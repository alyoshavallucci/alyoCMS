import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlyoService } from './alyo.service';

import { AlyoInputComponent } from './alyoinput/alyoinput.component';
import { AlyofontsComponent } from './alyofonts/alyofonts.component';

import { AlyoIconaNomeSitoComponent } from './alyoiconanomesito/alyoiconanomesito.component';

import { AlyoColoriComponent } from './alyocolori/alyocolori.component'

import { CookieService } from 'ngx-cookie-service';


import { DragDropModule } from '@angular/cdk/drag-drop';

import { alyocollegamentoComponent } from './alyocollegamento/alyocollegamento.component';
import { AlyosfondoComponent } from './alyosfondo/alyosfondo.component';
import { AlyoiconesitoComponent } from './alyoiconesito/alyoiconesito.component';
import { AlyonomesitoComponent } from './alyonomesito/alyonomesito.component';
import { AlyocontenutiscorrevoliComponent } from './alyocontenutiscorrevoli/alyocontenutiscorrevoli.component';

import { AlyogruppoclasseComponent } from './alyogruppoclasse/alyogruppoclasse.component';
import { AlyocambiobiancascuraComponent } from './alyocambiobiancascura/alyocambiobiancascura.component';

@NgModule({
  declarations: [
    AppComponent,
    AlyoInputComponent,
    AlyofontsComponent,
    AlyoIconaNomeSitoComponent,
    AlyoColoriComponent,
 
    alyocollegamentoComponent,
    AlyosfondoComponent,
    AlyoiconesitoComponent,
    AlyonomesitoComponent,
    AlyocontenutiscorrevoliComponent,
 
    AlyogruppoclasseComponent,
    AlyocambiobiancascuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [AlyoService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
