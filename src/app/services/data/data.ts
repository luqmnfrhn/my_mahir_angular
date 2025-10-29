import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.html',
  styleUrl: './data.scss',
})

@Injectable({
  providedIn: 'root',
})

export class Data {
  private isBrowser = typeof window !== 'undefined' && !!window.localStorage;

  constructor(){}

  setLocalStorage(key: string, value: string): void {
    if(this.isBrowser){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  setLocalStorageAlt(key: string, value: any){
    if(this.isBrowser){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorage(key:string): any{
    if(this.isBrowser){
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }

    return null;
  }

  clearStorage(){
    return localStorage.clear();
  }
}
