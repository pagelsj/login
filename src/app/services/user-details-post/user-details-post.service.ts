import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

import { UserRegistration } from '../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsPostService {

  constructor( private http: HttpClient ) { }

  public post(formData: UserRegistration): Observable<any> {
    return this.http
      .post(`${environment.API_BASE}/users`, formData)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
