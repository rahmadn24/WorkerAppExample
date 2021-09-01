import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: any;
  UserData: any[] = [];
  myControl = new FormControl();
  options: User[] = [
    { location: 'Jakarta' },
    { location: 'Bandung' },
    { location: 'Bali' }
  ];
  filteredOptions: Observable<User[]> | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.location),
        map(location => location ? this._filter(location) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.location ? user.location : '';
  }

  private _filter(location: string): User[] {
    const filterValue = location.toLowerCase();

    return this.options.filter(option => option.location.toLowerCase().includes(filterValue));
  }

  itemClick() {
    this.router.navigate([`list-worker/${this.value.location}`]);
  }

}
