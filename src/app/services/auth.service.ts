import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticated = this.isAuthenticated$.asObservable();

  private token$: BehaviorSubject<string> = new BehaviorSubject(null)
  public token = this.token$.asObservable();

  constructor(
  ) {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      this.setAuthenticatedUser(tokenFromStorage)
    }
  }
  
  public initCodeFlow() {
    window.location.href = 'https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=http://localhost:4200/login'
  }

  public setAuthenticatedUser(token: string) {
    this.isAuthenticated$.next(true)
    localStorage.setItem('token', token)
    this.token$.next(token);

  }

  public clearAuthenticatedUser() {
    this.isAuthenticated$.next(false)
    localStorage.removeItem('token')
    this.token$.next(null)
  }

  public logOut() {
    console.log('logOut')
  }



}
