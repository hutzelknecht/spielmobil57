import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp({
      // TODO
    })),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
