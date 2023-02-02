import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowdataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get("http://localhost:3000/show").pipe(map(res => res))
  }
}
