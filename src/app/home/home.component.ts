import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor() { }

  firstName = 'NIKKI';
  lastName = 'BARATTINO';
  subTitle = 'Video Producer . Writer . Creative Thinker';

}
