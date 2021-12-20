import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Componente
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { OrdenesListComponent } from './components/ordenes/ordenes-list/ordenes-list.component';
import { OrdenComponent } from './components/ordenes/orden/orden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    OrdenesListComponent,
    OrdenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
