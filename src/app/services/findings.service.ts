import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifinding } from '../models/ifinding';
import { environment } from '../../environments/environment.development';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class FindingsService {

  constructor(private _http:HttpClient) { }

  getAllFindings():Observable<Ifinding[]>{
    return this._http.get<Ifinding[]>(`${environment.baseUrl}/findings`)
  }

  getFindingByCategory(catId: number):Observable<Ifinding[]>{
    if(catId == 0)
      return this.getAllFindings();
    else
      return this._http.get<Ifinding[]>(`${environment.baseUrl}/findings?catId=${catId}`)
  }

  getAllCategories():Observable<Icategory[]>{
    return this._http.get<Icategory[]>(`${environment.baseUrl}/categories`)
  }

  removeFinding(id: number):Observable<void>{
    return this._http.delete<void>(`${environment.baseUrl}/findings/${id}`);
  }
}
