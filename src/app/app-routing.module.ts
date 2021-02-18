import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LensTypeListComponent } from './Components/lens-type-list/lens-type-list.component';
import { NumbersComponent } from './Components/numbers/numbers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lens', component: LensTypeListComponent },
  { path: 'number', component: NumbersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
