import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-portfolio',
  imports: [...SharedModules],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio implements OnInit{

  texts = ['Innovative', 'Professional', 'Creative'];
  currentIndex = 0;

  ngOnInit(){
      setInterval(() =>{
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }, 2000);
  }

  cards = [
  {
    title: 'Fast Performance',
    image: 'assets/img/performance.jpg',
    description: 'Experience blazing fast load times and optimized performance.',
    button: 'Learn More'
  },
  {
    title: 'Secure Platform',
    image: 'assets/img/security.jpg',
    description: 'Top-notch security features to protect your data.',
    button: 'Get Started'
  },
    {
    title: 'Cloud Ready',
    image: 'assets/img/cloud.jpg',
    description: 'Easily deploy your applications to the cloud.',
    button: 'Explore'
  }
];

}
