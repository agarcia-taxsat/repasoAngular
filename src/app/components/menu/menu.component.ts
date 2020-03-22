import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  rutas: any = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Posts',
      path: '/posts'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
