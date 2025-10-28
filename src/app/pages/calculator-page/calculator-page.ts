import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-calculator-page',
  imports: [
    ReactiveFormsModule,
    MatSlideToggleModule],
  standalone: true,
  templateUrl: './calculator-page.html',
  styleUrls: ['./calculator-page.scss'],
})
export class CalculatorPage implements OnInit{
  public calculateForm: any = FormGroup;
  public result: number = 0;

  constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.calculateForm = this.fb.group({
      textField1: [''],
      textField2: [''],
    });
  }

  onAdd(){
  var formData = this.calculateForm.value;
  const num1 = Number(formData.textField1);
  const num2 = Number(formData.textField2);
    if(formData.textField1 != '' && formData.textField2){
      this.result = num1 + num2;
    console.log('Result:', this.result);
    }
  }

  onSubtract(){
    var formData = this.calculateForm.value;
    const num1 = Number(formData.textField1);
    const num2 = Number(formData.textField2);
      if(formData.textField1 != '' && formData.textField2){
        this.result = num1 - num2;
      console.log('Result:', this.result);
      }
  }

  onMultiply(){
    var formData = this.calculateForm.value;
    const num1 = Number(formData.textField1);
    const num2 = Number(formData.textField2);

    if(formData.textField1 != '' && formData.textField1){
      this.result = num1 * num2;
      console.log('Result Multiply:', this.result);
    }
  }
}




