import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetCustDataService } from './get-cust-data.service'
import { ArrayType } from '@angular/compiler';
import { OriginalSource } from 'webpack-sources';
export interface PeriodicElement {
  name: string;
  position: number;
  address: number;
  age: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSourcecust: PeriodicElement[] = null;
  title = 'app';
  dataSource: any;
  newData: Array<any> = [];
  F1: number = 0;
  F2: number = 0;
  F3: number = 0;
  F4: number = 0;
  originalTableData: Array<PeriodicElement> = [];
  displayedColumns: string[] = ['position', 'name', 'Addres', 'age', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selectedFilters: Array<any> = [];
  filterarry: Array<any> = [];
  constructor(private getCustDataService: GetCustDataService) {
    this.dataSource = new MatTableDataSource<PeriodicElement>();
  }
  ngAfterViewInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
    // this.getfiltervalue();

  }
  getData(): void {
    this.getCustDataService.getCustData()
      .subscribe(data => {
        this.originalTableData = data;
        this.dataSource.data = data;
        data.forEach(item => {
          if (parseInt(item.age) < 20) {
            this.F1++;
          } else if (parseInt(item.age) >= 20 && parseInt(item.age) < 40) {
            this.F2++;
          } else if (parseInt(item.age) >= 40 && parseInt(item.age) < 60) {
            this.F3++
          }
          else if (parseInt(item.age) > 60) {
            this.F4++
          }
        });
        console.log("filter value", this.F1, this.F2, this.F3, this.F4)
      });

  };
  getFilterSelection(e, startValue, endValue) {
    //assigning original table
    if (!this.selectedFilters.some(item => item.name === e.target.textContent)) {
      this.dataSource.data = this.originalTableData;
      this.selectedFilters.push({
        name: e.target.textContent,
        startValue: startValue,
        endValue: endValue
      })
      this.filterarry.push({
        name: e.target.textContent,
      })
      this.dataSource.data.forEach(element => {
        if (startValue > 60 && startValue <= element.age) {
          this.newData.push(element);
        } else {
          if (startValue < element.age && element.age <= endValue) {
            this.newData.push(element);
          }
        }
      });
    }
    //assignng new array
    this.dataSource.data = this.newData;
   
  }

  // delete the colsed filter
  deleteFilterSelection(deletedFilter: any, index) {
    this.selectedFilters.splice(index, 1)
    this.dataSource.data = this.dataSource.data.filter((item) => {
      if (!(item.age > deletedFilter.startValue && item.age <= parseInt(deletedFilter.endValue))) {
        console.log("validator", !(item.age > deletedFilter.startValue && item.age <= parseInt(deletedFilter.endValue)))
        return true;
      } else {
        return false;
      }

    })
    this.newData = this.newData.filter((item) => {
      if (!(item.age > deletedFilter.startValue && item.age <= parseInt(deletedFilter.endValue))) {
        return true;
      } else {
        return false;
      }

    })
    //assignng new array
    if (this.selectedFilters.length == 0) {
      this.dataSource.data = this.originalTableData;
      this.newData.length = 0;
    }
    console.log("data after remove", this.dataSource.data)
  }
}
