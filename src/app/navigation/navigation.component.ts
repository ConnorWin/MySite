import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private internalNavigations: NavigationLink[] = [
    {link: '/', title: "Home"},
    {link: '/aboutme', title: "About Me"},
    {link: '/playinggames', title: "Playing Games"}
  ]
  private externalNavigations: NavigationLink[] = [
    {link: 'https://github.com/ConnorWin', title: "My Github"}
  ]

  constructor() {
  }

  ngOnInit() {
  }

}

interface NavigationLink {
  link:string;
  title: string;
}
