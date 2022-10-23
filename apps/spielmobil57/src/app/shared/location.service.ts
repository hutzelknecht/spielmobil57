import { Injectable } from '@angular/core';
import {Location} from "../models";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locations$: Observable<Location[]> | undefined;

  constructor(private firestore: AngularFirestore) {
    this.read();
  }

  read() {
    const locations = this.firestore.collection<Location>('location');
    this.locations$ = locations.valueChanges();
  }
}
