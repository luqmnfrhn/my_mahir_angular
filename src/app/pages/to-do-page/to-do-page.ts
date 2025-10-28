import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { MatDialog } from '@angular/material/dialog';
import { AddDialog } from '../../components/add-dialog/add-dialog';
import { Data } from '../../services/data/data';

@Component({
  selector: 'app-to-do-page',
  imports: [...SharedModules],
  templateUrl: './to-do-page.html',
  styleUrl: './to-do-page.scss',
})
export class ToDoPage implements OnInit {

  public todoList=[
    {task: 'Learn Angular', completed: false},
    {task: 'Build an App', completed: false},
    {task: 'Test the App', completed: false},
    {task: 'Deploy the App', completed: false},
  ];

  constructor(public dialog: MatDialog, protected dataService: Data){

  }

  onAdd() {
    console.log('Add button clicked!');
    const dialogRef = this.dialog.open(AddDialog);

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        console.log('Dialog result:', result);
        this.todoList.push({task: result, completed: false} ); // save the data in object format
        this.dataService.setLocalStorage('todo', JSON.stringify(this.todoList)); //change to string format before saving

      }
    })
  }

  onSelected(index: number){
    console.log('Checkbox selected!');
    this.todoList[index].completed = !this.todoList[index].completed;
    this.dataService.setLocalStorage('todo', JSON.stringify(this.todoList));
  }

  onDelete(index: number){
    console.log('Delete button clicked!');
    let confirmation = confirm('Are you sure you want to delete this task?');
    if(confirmation){
      this.todoList.splice(index,1);
      this.dataService.setLocalStorage('todo', JSON.stringify(this.todoList));
    }
    return;
  }

  ngOnInit(): void{
    let data = this.dataService.getLocalStorage('todo');
    if(data){
      this.todoList = JSON.parse(data);
    } else{
      this.todoList = [];
    }
  }
}
