import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private navScrolled = false;
  constructor() { }

  ngOnInit() { }

  @HostListener('document:scroll')
  scrollDocument() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.navScrolled = true;
    } else {
      this.navScrolled = false;
    }
  }

  goTo(link: string) {
    console.log(link);
    document.getElementById(link).scrollIntoView({
      behavior: 'smooth'
    });
  }

}
