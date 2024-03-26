import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IUser } from '../models/interfaces';


@Injectable({
  providedIn: 'root'
})

export class DummyApiService {
  private apiUrl= 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}products`)
  }

  addUser(userData: IUser): Observable<any>{
    return this.http.post(`${this.apiUrl}users/add`, userData)
  }
}
