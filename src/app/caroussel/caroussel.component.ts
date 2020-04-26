import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  backgroundIndex = ['bg0 active', 'bg1', 'bg2', 'bg3'];
  constructor() { }

  ngOnInit() {
  }

  goTo() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  }

}
