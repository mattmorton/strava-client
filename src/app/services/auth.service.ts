import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    window.location.href = `${environment.authBaseUrl}/connect/strava/redirect?callback=${environment.hostBaseUrl}/login`
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
