import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class Api {
  // Take from backend url
  public baseURL = 'http://localhost:3000/api';

  constructor(
    public httpClient: HttpClient,
    public dataService: Data
  ){

  }

  httpGet(path: string){
    let fullURL: string = this.baseURL + path;
    console.log('Fetching from:', fullURL);

    return new Promise((resolve, reject) =>{
      this.httpClient.get(fullURL).subscribe({
        next: (response: any) =>{
          console.log('API Response :', response);
          resolve(response);
        },
        error: (error: any) =>{
          console.error('API Error :', error);
          reject(error);
        }
      });
    })
  }

  httpPost(path: string, payload: any){
    let fullURL: string = this.baseURL + path;
    //add token
    // let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTc2MTgzOTUwNiwiZXhwIjoxNzYxOTI1OTA2fQ.lDi_XwWp3f9cNhUMLJOxJ_dH17cso5Bvn4RGkCR_EiM';
    let token: string = this.dataService.getLocalStorage('token');
    let headers: any = null;
    console.log('Retrieved token to add student:', token);
    if(token){
      console.log('Using token:', token);
      headers = { headers: new HttpHeaders(
        {Authorization: `Bearer ${token}`}
      ).set('Content-Type', 'application/json')}
    } else{
      headers = { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      };
    }
    console.log('Posting to:', fullURL);

    // let headers = { headers: new HttpHeaders(
    //     {Authorization: `Bearer ${token}`}
    //   ).set('Content-Type', 'application/json')
    // }

    return new Promise((resolve, reject) =>{
      this.httpClient.post(fullURL, payload, headers)
      .subscribe({
        next: (response: any) =>{
          console.log('API Response :', response);
          resolve(response);
        },
        error: (error: any) =>{
          console.error('API Error :', error);
          reject(error);
        }
      })
    })
  }
}
