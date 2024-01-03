import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
  }

  async login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async logout(): Promise<any> {
    return this.afAuth.signOut();
  }

  getCurrentUser(){
    return this.afAuth.currentUser;
  }

  isUserLoggedIn(){
    return !!this.afAuth.currentUser;
  }
}
