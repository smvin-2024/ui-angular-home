import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
  }

  toggleMenu() {}

  menu = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Services', link: '/services' },
    // { id: 4, title: 'Gallery', link: '/gallery' },
    // { id: 5, title: 'Testimonials', link: '/testimonials' },
    { id: 6, title: 'Clients', link: '/clients' },
    { id: 7, title: 'Pricing', link: '/pricing' },
  ];
}
