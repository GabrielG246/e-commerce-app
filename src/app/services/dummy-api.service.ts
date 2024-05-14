import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IUser, ILogin, IData } from '../models/interfaces';


@Injectable({ 
  providedIn: 'root'
})

export class DummyApiService {
  private apiUrl = 'https://fakestoreapi.com/'
  private dummyUrl = 'https://dummyjson.com/'

  constructor(private http: HttpClient) { }

  getLengthProducts(): Observable<number>{
    return this.http.get<number>(`${this.dummyUrl}products`)
  }

  getLimitedProducts(skip: number): Observable<IData> {
    return this.http.get<IData>(`${this.dummyUrl}products?limit=20&skip=${skip}`)
  }

  addUser(userData: IUser): Observable<any> {
    return this.http.post(`${this.dummyUrl}users/add`, JSON.stringify(userData))
  }

  getUserToken(credenciales:ILogin): Observable<any> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(`${this.dummyUrl}auth/login`, JSON.stringify(credenciales),{headers: headers})
  }

  loginUser(authToken :string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.get<any>(`${this.dummyUrl}auth/me`, {headers: headers})
  }
}
