import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { TaskItem } from './task-item-dto';
import { NewTask } from './new-task-dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  newTask:NewTask = new NewTask();

  tasks : TaskItem[] = [
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the Gym"),
    new TaskItem("Wash the dishes"),
    new TaskItem("Shop for the party")
  ];

  constructor(private route: ActivatedRoute) {
    
  } 
  
  ngOnInit(): void {
    var strDate = new Date(this.route.snapshot.params['date']);
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
    
  }

add(taskNgForm : NgForm){

  if(taskNgForm.touched == false) return;
  //if(taskNgForm.valid == false) return;

  if(this.newTask.title === null || this.newTask.title === undefined || this.newTask.title === ""){
    alert('You must add some string');
  }else{
    this.tasks.push(new TaskItem(this.newTask.title));
    taskNgForm.reset({date : this.newTask.date});
    //this.newTaskTitle = "";
  }  
}

remove(taskToBeRemoved : TaskItem){
  if(confirm(`Are you sure you want to remove the following task?\n "${taskToBeRemoved.title}"`)) {
    this.tasks = this.tasks.filter(x => x != taskToBeRemoved);
  }    
}

markAsDone(taskToBeMarkedAsDone : TaskItem){
  taskToBeMarkedAsDone.isDone = !taskToBeMarkedAsDone.isDone;
}
}


