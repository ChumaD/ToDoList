import { Component } from '@angular/core'; 
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'To Do List';
tasks = [];
nothing = true
  
  newTask : string='';
  priority : string='';

  addTasks(){
this.tasks.push({taskname:this.newTask, taskpriority:this.priority})
this.nothing=false
this.newTask = null
this.priority=null
  }

RemoveTask(task) {
  let index = this.tasks.indexOf(task)
  this.tasks.splice(index,1)
  if(this.tasks.length <=0){
    this.nothing=true
  }
}
EditTask(task){
  // let newtasks = prompt("Edit task: ", task.newTask)
 // let prio  = prompt("Edit priority:" ,task.priority)

  let index = this.tasks.indexOf(task)
  let newt = prompt("edit task", task.newTask)
  let newp = prompt("enter priority", task.priority)
   
 if (newt != null || newp != null){
   this.tasks[index]. taskname= newt
   this.tasks[index].taskpriority=newp

 }
}

  } 

