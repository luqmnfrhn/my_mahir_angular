import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-portfolio',
  imports: [...SharedModules],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit{

  texts = ['Innovative', 'Professional', 'Creative'];
  currentIndex = 0;

  ngOnInit(){
      setInterval(() =>{
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }, 2000);
  }
}
