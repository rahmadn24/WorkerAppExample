import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { DetailWorkerComponent } from './page/detail-worker/detail-worker.component';
import { HeaderComponent } from './page/basicPage/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListWorkerComponent } from './page/list-worker/list-worker.component';
import { CommonApiService } from './providers/common-api/common-api.service';
import { WorkerService } from './providers/page/worker.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailWorkerComponent,
    HeaderComponent,
    ListWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule, MatButtonModule, MatAutocompleteModule, MatInputModule, MatGridListModule
  ],
  providers: [
    WorkerService,
    CommonApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
