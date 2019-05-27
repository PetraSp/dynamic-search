import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CustomerDTO } from './customerDTO.model';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customerUrl = 'api/data/customers.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<{'customers': CustomerDTO[]}> {
    return this.http.get<{'customers': CustomerDTO[]}>(this.customerUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }
}
