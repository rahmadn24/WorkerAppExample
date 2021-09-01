import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/providers/page/worker.service';

@Component({
  selector: 'app-detail-worker',
  templateUrl: './detail-worker.component.html',
  styleUrls: ['./detail-worker.component.scss']
})
export class DetailWorkerComponent implements OnInit {

  userId: any;
  userData: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    // private workerService: WorkerService
  ) { }

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.paramMap.get('userId');
    this.getData();
  }

  getData() {

  }

}
