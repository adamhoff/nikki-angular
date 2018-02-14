import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShowreelComponent } from './showreel/showreel.component';
import { AboutComponent } from './about/about.component';
import { EquipmentComponent } from './equipment/equipment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowreelComponent,
    AboutComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
