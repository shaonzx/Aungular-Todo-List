import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  tasks : Task[] = [
  new Task("Visit Ann"),
  new Task("Call Dad"),
  new Task("Go to the Gym"),
  new Task("Wash the dishes"),
  new Task("Shop for the party")
];

add(newTask : string){
  this.tasks.push(new Task(newTask));
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
