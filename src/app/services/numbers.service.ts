import { Injectable } from '@angular/core';
import { NumberModel } from '../Components/models/number.model';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  number: NumberModel;
  constructor() { }

  add(number: NumberModel){
    this.number = number;
  }

  get(){
    return this.number;
  }
}
