import { Component, Input, OnInit } from '@angular/core';
import { GlassesService } from 'src/app/services/glasses.service';
import { FramesModel } from '../models/frames.model';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  @Input() frame: FramesModel;
  
  constructor(private glassesService: GlassesService) { }

  ngOnInit(): void {
    console.log(this.frame.img);
  }

  add(frame){
    this.glassesService.addFram(frame);
  }
}
