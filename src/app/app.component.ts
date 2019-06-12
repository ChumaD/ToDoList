import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'ToDoList';
tasks = [];

  newTask : string

  addTasks(){
this.tasks.push(this.newTask)
this.newTask = null
  }

RemoveTask(task) {
  let index = this.tasks.indexOf(task)
  this.tasks.splice(index,1)
}
  }

