import { Injectable } from '@angular/core';
import { LansModel } from '../Components/models/lans.model';

@Injectable({
  providedIn: 'root'
})
export class LansService {
  lansType: LansModel;

  constructor() { }

  addLane(lane: LansModel){
    this.lansType = lane;
  }

  get(){
    return this.lansType;
  }
}
