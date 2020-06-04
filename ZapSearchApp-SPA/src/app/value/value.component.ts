import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  filteredvalues: any;
  private _searchterm: string ;
  get searchterm(): string {
    return this._searchterm;
  }
  set searchterm(value: string) {
    this._searchterm = value;
    this.filteredvalues = this.filterValues(value);
  }
  filterValues(searchString: string){
    return this.values.filter(x =>
      x.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }

  constructor(private http: HttpClient, private employeeService: EmployeeService ) { }

  ngOnInit() {
    // this.getValues();
    this.employeeService.getEmployees().subscribe(response => {
      this.values = response;
      this.filteredvalues = this.values;
      }, error => {
        console.log(error);
      });
    // this.filteredvalues = this.values;

  }
  // getValues(){
  //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //   this.values = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
