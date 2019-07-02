import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { EspecialistaComponent } from './componentes/especialista/especialista.component';
import { RecepcionistaComponent } from './componentes/recepcionista/recepcionista.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ErrorComponent } from './componentes/error/error.component';
import { VolverComponent } from './componentes/volver/volver.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './componentes/logout/logout.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IngresoComponent,
    EspecialistaComponent,
    RecepcionistaComponent,
    ClienteComponent,
    AdminComponent,
    ErrorComponent,
    VolverComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Trabajo Práctico 2'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
