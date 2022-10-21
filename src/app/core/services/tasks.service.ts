import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public _tasks: Task[]=[
    {
    idTask: 1,
    nameTask: "cocinar",
    dateTask: "01-01-2022",
    imgTask: ""
    },
    {
    idTask: 2,
    nameTask: "limpiar",
    dateTask: "01-01-2022",
    imgTask: ""
    },
  {
    idTask: 3,
    nameTask: "ordenar",
    dateTask: "01-01-2022",
    imgTask: ""
    },
    {
    idTask: 4,
    nameTask: "merendar",
    dateTask: "01-01-2022",
    imgTask: ""
    },
    {
    idTask: 5,
    nameTask: "enseñar",
    dateTask: "01-01-2022",
    imgTask: ""
    },
  ]



  idTask: number = this._tasks.length+1;
  constructor() { 
  }

  getTasks(){
    return this._tasks;
  }

  getTaskById(idTask: number){
    return this._tasks.find(c => c.idTask == idTask);
  }

  deleteTaskById(idTask: number){
    this._tasks = this._tasks.filter(c => c.idTask != idTask);
  }

  addTask(Task: Task){
    Task.idTask = this.idTask++;
    this._tasks.push(Task);
  }

  updateTask(Task: Task){
    var _Task = this._tasks.find(c => c.idTask == Task.idTask);
    if(_Task){
      _Task.nameTask = Task.nameTask;
      _Task.dateTask = Task.dateTask;
      _Task.imgTask = Task.imgTask;
    }
  }
  
}
