import { Component, OnInit, NgModule} from '@angular/core';
import { NumbersService } from 'src/app/services/numbers.service';
import { NumberModel } from '../models/number.model';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  numbers: any;

  constructor(private numbersService :NumbersService) {
    this.numbers = {};
   }

  ngOnInit(): void {
  }

  add(number: NumberModel){
    this.numbersService.add(number);
  }
}
