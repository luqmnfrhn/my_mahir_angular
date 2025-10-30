import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-detail-page',
  imports: [...SharedModules,RouterLink],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.scss',
})
export class DetailPage implements OnInit {
  public id: any;

  public student: {id: number, name: string, studentno: string, email: string, phone: string} | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: Api
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.student = {
      id: 0,
      name: '',
      studentno: '',
      email: '',
      phone: ''
    }

      try {
        let response: any = await this.apiService.httpGet('/students/'+this.id);
      if(response.success){
        console.log(response.data);
        this.student = response.data; // ✅ assign the fetched data
      } else{
        console.error('Error', response.message);
      }
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
  }
}
