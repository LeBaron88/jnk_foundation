import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  backgroundIndex = [0, 1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

  goTo() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  }

}
