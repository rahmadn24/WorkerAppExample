import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerResponseService {

  constructor(private router: Router) { }

  public successResponse(response: { status: any; message: string; }) {

    switch (response.status) {

      case StatusCode.SUCCESS:
        console.log(response);
        //this.message.create("success", response.message);
        break;

    }

    return response;
  }

  public failedResponse(error: { status: any; }) {

    switch (error.status) {

      case StatusCode.BAD_REQUEST:
        // show dialog
        //this.message.create("error", "Mohon maaf terjadi kesalahan saat request data");
        break;

      case StatusCode.SERVER_ERROR:
        // show dialog
        //this.message.create("error", "Mohon maaf server sedang tidak bisa di akses");
        break;

    }

    return of(error);
  }
}

export enum StatusCode {
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
  SUCCESS = 200
}
