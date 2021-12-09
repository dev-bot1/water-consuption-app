import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { WaterComponent } from './water/water.component';
import { SucessComponent } from './sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    WaterComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'forms', component: FormsComponent},
      {path: 'water', component: WaterComponent},
      {path: 'sucess', component: SucessComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
