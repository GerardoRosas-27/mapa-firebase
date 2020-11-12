import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: Observable<firebase.User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  get authenticated(): boolean {
    return this.user != null; // True ó False
  }
  get currentUser(): Observable<firebase.User | null> {
    return this.user;
  }

  signUpWithEmail(user: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.correo, user.contra);
  }

  signInWithEmail(user: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.correo, user.contra)
  }

  signOut() {
    this.afAuth.auth.signOut().then(result =>{
      console.log('secion cerrada: ', result);
      sessionStorage.clear();
    })
  }

}

