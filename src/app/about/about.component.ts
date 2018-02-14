import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  about1='I am a college graduate of James Madison University’s School of Media, Arts and Design with a Bachelor of Science degree in    Digital Video & Cinema. I am looking for full-time employment in Virginia. I am currently looking for work that involves video production, advertising, and/or writing. I aim to expand my skills in these areas and work everyday to better myself professionally.';

  about2='I love Thai food, Costco samples, pizza with Chik-Fil-A Sauce, exploring new music, riding roller coasters, meeting new people, Quentin ​Tarantino, Nathan for You. Black Mirror, a tall glass of beer, cuddly pets, chugging coffee and writing in coffee shops.';

  about3Title='\"The definition of insanity is doing the same thing over and over again and expecting a different result.\" -Albert Einstein ';
  about3='I love this quote, because it reminds me how every situation is unique and should be approached differently. Thinking outside the box isn\'t limited to specific moments, rather it\'s how we should approach life at every moment possible.';
}
