import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandlerResponseService } from '../handler-response/handler-response.service';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  headers = null;
  constructor(private http: HttpClient, private handlerResponseService: HandlerResponseService) {
    // this.BASE_URL = config.BASE_URL;
  }

  get(url: string, params?: any, reqOpts?: any): Observable<any> {

    if (this.checkConnection()) {
      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }

      if (params) {
        reqOpts.params = new HttpParams();
        for (let reqParams in params) {
          reqOpts.params = reqOpts.params.set(reqParams, params[reqParams]);
        }
      }

      return this.http.get<any>('/api/' + url, reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      return new Observable<any>();
    }

  }

  checkConnection() {
    return navigator.onLine;
  }
}
