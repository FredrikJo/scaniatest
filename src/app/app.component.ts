import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Driver {
  driver: string;
  company: string;
  distance: number;
  score: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-app';
  selectedfilter = "";

  driversArray: Driver[] = [
      {driver: "Marcus Lundberg", company: "Aris FC", distance: 75044, score: 52},
      {driver: "Marcus Mena Pacheco", company: "Lio LTD", distance: 129417, score: 95},
      {driver: "Valentine Ichtertz", company: "LOTS Group", distance: 244656, score: 67},
      {driver: "Niklas Rosén", company: "DD Interactive", distance: 200000, score: 78}
    ];
  drivers = new MatTableDataSource(this.driversArray);
  
  ngOnInit(): void {
    this.drivers.filterPredicate = function (record,filter) {
        if (filter === "le200k") {
         return record.distance <= 200000;
        } else if (filter === "gt200k") {
          return record.distance > 200000;
        }
        return true;
      }
  }

  changeSelectedFilter(selection: string) {
    this.selectedfilter = selection;
    this.drivers.filter = selection.trim().toLowerCase();
  }
  
  displayedColumns: string[] = ['driver', 'company', 'distance', 'score'];

}

