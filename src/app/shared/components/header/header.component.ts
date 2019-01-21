import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;
  topOfElement: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.appConfig = appConfig;
  }

  ngOnInit() {
    // this.loadMenus();
  }

  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  // }

  scrollToElement($element): void {
    console.log($element);
    // this.topOfElement = $element.offsetTop - 64;
    // window.scroll({ top: this.topOfElement, behavior: 'smooth' });
  }

  // private loadMenus(): void {
  //   this.menuItems = [
  //     {link: '/', name: _('home')},
  //     {link: '/' + AppConfig.routes.heroes, name: _('heroesList')}
  //   ];
  // }
}
