import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

newTask: Task = new Task();

addTask(){
  this.taskService.addTask(this.newTask).subscribe(
    t=> this.router.navigate(["tasks"])
  );
}

  constructor(private taskService: TasksService, private router : Router) { }

  ngOnInit() {
  }

}
