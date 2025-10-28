import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-dialog',
  imports: [...SharedModules],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.scss',
})
export class AddDialog implements OnInit{

  public todoForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDialog>
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: '',
    });
  }

  onDialogCancel(){
    console.log('Dialog cancelled!');
    this.dialogRef.close();
  };

  onDialogAdd(){
    console.log('Dialog add confirmed!');
    let formData = this.todoForm.value;
    if(formData.title != ''){
      this.dialogRef.close(formData.title);
    }
  };


}
