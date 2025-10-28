import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./components/toolbar/toolbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Toolbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my_mahir_angular');
  public myName: String;
  textInput: String;

  constructor(){
    this.myName = 'Luqman Farhan';
    this.textInput = '';
  }

  changeName(){

   this.myName = this.textInput;  
  }

  btnClick(){
    let length : number =10;
    let width : number = 3;
    if(length > 9){
      console.log('Length:', length);
      console.log("Width:", width);
      console.log('The area =', calculateArea (length,width));
      calculateArea (length,width);
    }

    function calculateArea(length: number , width: number) {
      return length* width;
    }
  }

  btnArray(){
    var cars: Array<string> = ['Proton', 'Perodua', 'BMW', 'Mercedes'];
    console.log('All cars:', cars);
    console.log('Car Index 2, cars[2]');

    cars[1] = "BYD";
    console.log('New car listing:', cars);

    cars.push('Audi');
    console.log('After push():', cars);

    cars.unshift('Toyota');
    console.log('After unshift():', cars);

    cars.forEach(car => console.log(`I Love ${car}`));

    //alt for loop
    for(let i=0; i< cars.length; i++){
      console.log("I very like", cars[i]);
    }

    for(let car of cars){
      console.log("I suka sangat", car);
    }
  }
}
