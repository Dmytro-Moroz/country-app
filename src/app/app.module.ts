import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryService } from './services/country.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCountryComponent } from './components/add-country/add-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavbarComponent,
    AddCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'country-app'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [CountryService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
