import { Injectable } from '@angular/core';
// import { LocalStorageService } from 'angular-2-local-storage';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  // key: any;
  // constructor(private localStorageService: LocalStorageService,) { }
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  // get_key() {
  //   this.key = this.localStorageService.get('KEY') || " ";
  //   this.key = this.key.replace(/\"/g, "");
  //   console.log(this.key);
  //   return this.key;
  // }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY); //the result is always null
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
