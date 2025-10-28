import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-directive-page',
  imports: [...SharedModules,],
  templateUrl: './directive-page.html',
  styleUrl: './directive-page.scss',
  // standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivePage {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  public showListCar: boolean = false;
  public cars = [
    { brand: 'Toyota', year: 2010, price: 'Rm300000', type: 'manual', origin: 'Japan' },
    { brand: 'BMW', year: 2012, price: 'Rm400000', type: 'automatic', origin: 'Germany' },
    { brand: 'Volvo', year: 2016, price: 'Rm350000', type: 'automatic', origin: 'Sweden' },
    { brand: 'Audi', year: 2023, price: 'Rm500000', type: 'manual', origin: 'Germany' },
    { brand: 'Mercedes', year: 2018, price: 'Rm450000', type: 'automatic', origin: 'Germany' },
  ]

  onToggleChange(){
    this.showListCar = !this.showListCar;
    console.log('boolean value:', this.showListCar); 
  }
}
