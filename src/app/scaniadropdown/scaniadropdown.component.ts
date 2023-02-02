import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

interface Distance {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-scaniadropdown',
  templateUrl: './scaniadropdown.component.html',
  styleUrls: ['./scaniadropdown.component.css']
})
export class ScaniadropdownComponent {
  distances: Distance[] = [
    {value: 'le200k', viewValue: '<=200.000 km'},
    {value: 'gt200k', viewValue: '>200.000 km'},
  ];
  selected = "";

  reset() {
    this.selected = "";
    this.newItemEvent.emit("");
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(event: any) {
    this.newItemEvent.emit(event.value);
  }
}
