import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[];

getTasks(): void{
  this.tasksService.getTasks().subscribe(
    t => this.tasks = t
  )
}

deleteTask(id: number) : void {
  this.tasksService.deleteTask(id).subscribe(
    t=> this.getTasks()
    )
}
viewTask(id: number) : void {
  this.tasksService.viewTask(id).subscribe(
    t => this.getTasks()
  )
}

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
this.getTasks(); 
  }
}
