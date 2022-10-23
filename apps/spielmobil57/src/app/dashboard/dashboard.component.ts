import { Component, OnInit } from '@angular/core';

import {LocationService} from "../shared/location.service";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'spielmobil57-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public location: LocationService,
              private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

}
