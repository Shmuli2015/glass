import { Component, OnInit } from '@angular/core';
import { GlassesService } from 'src/app/services/glasses.service';
import { LansService } from 'src/app/services/lans.service';
import { NumbersService } from 'src/app/services/numbers.service';
import { FramesModel } from '../models/frames.model';
import { LansModel } from '../models/lans.model';
import { NumberModel } from '../models/number.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  frame: FramesModel;
  lans: LansModel;
  number: NumberModel;

  constructor(private glassesService: GlassesService, private lansService: LansService, private numbersService: NumbersService) {
   }

  ngOnInit(): void {
  }

  getFrame(){
    this.frame = this.getFrame();
  }
}
