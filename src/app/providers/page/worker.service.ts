import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonApiService } from '../common-api/common-api.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private http: HttpClient,
    private commonApi: CommonApiService
  ) { }

  public searchResult(param: any) {
    return this.commonApi.get(`public/v1/news/searchNews/${param}/kabarxxi`);
  }

  public getDataWorker(param: any) {
    return this.commonApi.get("public/v1/news/main", param);
  }
}
