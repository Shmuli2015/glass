import { Component, OnInit } from '@angular/core';
import { LansModel } from '../models/lans.model';

@Component({
  selector: 'app-lens-type-list',
  templateUrl: './lens-type-list.component.html',
  styleUrls: ['./lens-type-list.component.css']
})
export class LensTypeListComponent implements OnInit {

  lansType: LansModel[];

  constructor() { 
    this.lansType = [
      {
        name: "Multifocal"
      },
      {
        name: "far away"
      },
      {
        name: "Close"
      },
    ]
  }

  ngOnInit(): void {
  }

}
