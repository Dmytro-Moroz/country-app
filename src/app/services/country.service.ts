import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Country } from '../models/country';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// export interface CountryId extends Country { 
//   id: string; 
// }

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countriesCollection: AngularFirestoreCollection<Country>;
  countries: Observable<Country[]>;
  countryDoc: AngularFirestoreDocument<Country>;

  constructor(public afs: AngularFirestore) { 
    // this.countries = this.afs.collection('countries').valueChanges();
    this.countriesCollection = this.afs.collection('countries', ref => ref.orderBy('title', 'asc'));
    // this.countries = this.countriesCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Country;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // );
    this.countries = this.countriesCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Country;
        data.id = a.payload.doc.id;
        return data;
      }))
    )
  }

  getCountries(){
    return this.countries;
  }

  addCountry(country: Country){
    this.countriesCollection.add(country);
  }

  deleteCountry(country: Country){
    this.countryDoc = this.afs.doc(`countries/${country.id}`);
    this.countryDoc.delete();
  }

  updateCountry(country:Country){
    this.countryDoc = this.afs.doc(`countries/${country.id}`);
    this.countryDoc.update(country);
  }
}


