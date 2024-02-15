import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {

  constructor(){

  }

pp = {
  id: 7,
  name: 'header',
  tagline: 'Start your Venture',
  title:
    'We help you to start your Venture.',
  buttontext: 'START CREATING TODAY',
  buttonlink: '/home',
  image: 'banner-logo-1.jpg',
};

}
