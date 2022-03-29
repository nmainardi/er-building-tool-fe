import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-table',
  templateUrl: './gear-table.component.html',
  styleUrls: ['./gear-table.component.scss']
})
export class GearTableComponent implements OnInit {
  @Input() dataSource: any;
  displayedColumns: string[] = ['elmo', 'corpetto', 'guanti', 'pantaloni'];


  constructor() { }

  ngOnInit(): void {
  }

}
