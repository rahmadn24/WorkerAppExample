import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkerService } from 'src/app/providers/page/worker.service';

// export interface UserData {
//   location: string;
//   speciality: String;
//   name: string;
//   price: number;
//   picture: string;
// }

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.scss']
})
export class ListWorkerComponent implements OnInit {

  location: any = "";
  userData: any = [];

  constructor(
    private activeRoute: ActivatedRoute,
    // private workerService: WorkerService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.location = this.activeRoute.snapshot.paramMap.get('location');
    this.getData();
  }

  getData() {
    // this.workerService.searchResult(this.location).subscribe(data => {
    //   this.userData = data.data;
    // })
    this.userData = [
      {
        location: "Bandung",
        speciality: "Kanker",
        name: "Ryan Ahmad",
        price: 200000,
        picture: "../../../assets/img/logo.png",
        userId: 1,
      }, {
        location: "Bandung",
        speciality: "Kanker",
        name: "Ryan Ahmad",
        price: 200000,
        picture: "../../../assets/img/logo.png",
        userId: 2,
      }, {
        location: "Bandung",
        speciality: "Kanker",
        name: "Ryan Ahmad",
        price: 200000,
        picture: "../../../assets/img/logo.png",
        userId: 3,
      },
    ];

    // this.httpClient.get("assets/sample.json").subscribe(data => {
    //   console.log(data);
    //   this.userData = data;
    // }) 
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/mydata.json");
  }

  detailWorker(value: number) {
    this.router.navigate([`detail-worker/${value}`]);
  }

}
