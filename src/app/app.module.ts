import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './components/me/me.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { CVComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ProjetsComponent,
    CVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
