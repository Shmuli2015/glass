import { Component, OnInit } from '@angular/core';
import { FramesModel } from '../models/frames.model';

@Component({
  selector: 'app-frames-list',
  templateUrl: './frames-list.component.html',
  styleUrls: ['./frames-list.component.css']
})
export class FramesListComponent implements OnInit {

  framesList: FramesModel[];

  constructor() { 
    this.framesList = [
      {
        name: 'Saratoga 101218-1',
        Desc: 'for men, from Plastic',
        price: 25.95,
        img: "/assets/pic1.jpg"
      },
      {
        name: 'Saratoga 101218-2',
        Desc: 'for men, from Plastic',
        price: 25.95,
        img: "/assets/pic1.jpg"
      },
      {
        name: 'Saratoga 101218-3',
        Desc: 'for men, from Plastic',
        price: 25.95,
        img: "/assets/pic1.jpg"
      }
    ]
  }

  ngOnInit(): void {
    
  }

}
