import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailWorkerComponent } from './page/detail-worker/detail-worker.component';
import { HomeComponent } from './page/home/home.component';
import { ListWorkerComponent } from './page/list-worker/list-worker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-worker/:location', component: ListWorkerComponent },
  { path: 'detail-worker/:userId', component: DetailWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
