import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ShowreelComponent } from './showreel/showreel.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'showreel', component: ShowreelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
