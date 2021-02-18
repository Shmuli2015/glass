import { Component, Input, OnInit } from '@angular/core';
import { LansService } from 'src/app/services/lans.service';
import { LansModel } from '../models/lans.model';

@Component({
  selector: 'app-lens-type',
  templateUrl: './lens-type.component.html',
  styleUrls: ['./lens-type.component.css']
})
export class LensTypeComponent implements OnInit {

  @Input() lans: LansModel;

  constructor(private lansService: LansService) { }

  ngOnInit(): void {
  }

  add(lane: LansModel){
    this.lansService.addLane(lane);
  }
}
