import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FrameComponent } from './Components/frame/frame.component';
import { LensTypeListComponent } from './Components/lens-type-list/lens-type-list.component';
import { LensTypeComponent } from './Components/lens-type/lens-type.component';
import { NumbersComponent } from './Components/numbers/numbers.component';
import { OrderComponent } from './Components/order/order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FramesListComponent } from './Components/frames-list/frames-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrameComponent,
    LensTypeListComponent,
    LensTypeComponent,
    NumbersComponent,
    OrderComponent,
    FramesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
