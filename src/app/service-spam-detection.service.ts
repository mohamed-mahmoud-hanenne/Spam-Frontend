import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSpamDetectionService {
  private apiUrl = "http://127.0.0.1:5000/predict";

  constructor(private http:HttpClient) {}

  checkEmail(email:string): Observable<any> {
    return this.http.post(this.apiUrl,{email});
  }
}
