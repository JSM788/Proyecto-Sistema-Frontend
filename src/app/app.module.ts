import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGraphComponent } from './components/data-graph/data-graph.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGraphComponent,
    LoginFormComponent,
    PruebaComponent,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
