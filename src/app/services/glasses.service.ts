import { Injectable } from '@angular/core';
import { FramesModel } from '../Components/models/frames.model';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {

  frameList: FramesModel;
  
  constructor() {
  }

  addFram(frame: FramesModel) {
    this.frameList = frame;
  }

  get(){
    return this.frameList;
  }

  
}

