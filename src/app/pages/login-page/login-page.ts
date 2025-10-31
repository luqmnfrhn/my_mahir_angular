import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { SharedModules } from '../../shared/shared-modules';
import { Router, RouterLink } from '@angular/router';
import { Data } from '../../services/data/data';

@Component({
  selector: 'app-login-page',
  imports: [...SharedModules, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  public loginForm: FormGroup;
  public hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private apiService: Api,  
    private router: Router,
    private data: Data
  ){
     this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: ['', Validators.required]
     })
  }

  async onSubmit(){
    try {
      const loginData: any = this.loginForm.value;
      const response: any = await this.apiService.httpPost('/auth/login', loginData);
      console.log('Login successful');
      if(response.success){
        // Add Token
        let token = response.data.token; 
        if(token){
          this.data.setLocalStorage('token', token);
          console.log('Token saved to local storage', token); 
        } else{
          console.warn('No token received from login response');
        }
      }
      this.router.navigateByUrl('/student');
    } catch(err: any){
      console.error(err.message)
      alert('Login failed: ' + err.message);
    }
  }

  togglePassword(){
    this.hidePassword = !this.hidePassword;

  }
}
