import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  date: Date = new Date();
  newTaskTitle : string = "";
  tasks : Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the Gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ];

  constructor(private route: ActivatedRoute) {
    
  } 
  
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
    
  }

add(taskNgForm : NgForm){

  if(taskNgForm.touched == false) return;
  //if(taskNgForm.valid == false) return;

  if(this.newTaskTitle === null || this.newTaskTitle === undefined || this.newTaskTitle === ""){
    alert('You must add some string');
  }else{
    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date : this.date});
    //this.newTaskTitle = "";
  }  
}

remove(taskToBeRemoved : Task){
  if(confirm(`Are you sure you want to remove the following task?\n "${taskToBeRemoved.title}"`)) {
    this.tasks = this.tasks.filter(x => x != taskToBeRemoved);
  }    
}

markAsDone(taskToBeMarkedAsDone : Task){
  taskToBeMarkedAsDone.isDone = !taskToBeMarkedAsDone.isDone;
}
}

class Task {

constructor(public title:string) {    
}

public isDone = false;
}
