import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dang todo-list';

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
      this.tasks = this.tasks.filter(x => x.title != taskToBeRemoved.title);
    }    
  }

  markAsDone(taskToBeMarkedAsDone : Task){
    alert('The task "' + taskToBeMarkedAsDone.title + '" has been marked as done.');
    taskToBeMarkedAsDone.isDone = true;
  }
}

class Task {

  constructor(public title:string) {    
  }

  public isDone = false;
}
