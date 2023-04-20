import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getEmplyees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
