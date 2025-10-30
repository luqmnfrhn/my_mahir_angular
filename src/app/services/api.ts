import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  // Take from backend url
  public baseURL = 'http://localhost:3000/api';

  constructor(public httpClient: HttpClient){

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
    let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTc2MTgzOTUwNiwiZXhwIjoxNzYxOTI1OTA2fQ.lDi_XwWp3f9cNhUMLJOxJ_dH17cso5Bvn4RGkCR_EiM';
    console.log('Posting to:', fullURL);

    let headers = { headers: new HttpHeaders(
        {Authorization: `Bearer ${token}`}
      ).set('Content-Type', 'application/json')
    }

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
