import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { Router, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  imports: [...SharedModules, RouterLink],
  templateUrl: './add-page.html',
  styleUrl: './add-page.scss',
})
export class AddPage {

  public studentForm: FormGroup;

  constructor(
    private apiService: Api, 
    private router: Router,
    private form: FormBuilder
  ){
    this.studentForm = this.form.group({
      name: ['', Validators.required],
      student_no: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]], 
    });
  }



  async saveStudent(){
    try {
      const response: any = this.studentForm.value;
      await this.apiService.httpPost('/students/add', response);
      console.log('Student added successfully');
      this.router.navigateByUrl('student');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }

  async onSubmit(){
    try {
      const studentData: any = this.studentForm.value;
      await this.apiService.httpPost('/students/add', studentData);
      console.log('Student data added successfully');
      this.router.navigateByUrl('/student');
    } catch(err: any){
      console.error(err.message)
    }
  }
}
