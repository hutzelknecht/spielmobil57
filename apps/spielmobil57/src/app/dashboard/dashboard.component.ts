import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {Location} from "../models";

@Component({
  selector: 'spielmobil57-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  locations$: Observable<Location[]> | undefined;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    const locations = this.firestore.collection<Location>('location');
    this.locations$ = locations.valueChanges();
  }

}
