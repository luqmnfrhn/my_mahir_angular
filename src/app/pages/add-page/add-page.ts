import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { Router, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      student_no: [''],
      email: [''],
      phone: ['']
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
}
