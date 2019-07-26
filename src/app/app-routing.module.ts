import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full"
  },
  {
    path: "tasks",
    component: TasksComponent
  },
  {
    path: "add",
    component: AddTaskComponent
  },
  {
    path: "edit/:id",
    component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
