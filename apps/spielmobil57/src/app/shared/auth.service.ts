import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      async (result) => {
        console.log('success login', await result.user?.getIdToken());
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.error(err);
        this.router.navigate(['/login']);
      });
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        console.log('success register');
        this.router.navigate(['/login']);
      }, err => {
        console.error(err);
        this.router.navigate(['/register']);
      });
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        console.log('success logout');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }, err => {
        console.error(err);
      });
  }

}
