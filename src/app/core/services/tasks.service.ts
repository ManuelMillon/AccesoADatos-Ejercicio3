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
    imgTask: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\deportes\baloncesto.jpg",
    durationInSecs:3600,
    },

    {
    idTask: 2,
    nameTask: "limpiar",
    imgTask: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\deportes\balonmano.jpg",
    durationInSecs:3600,
    },

  {
    idTask: 3,
    nameTask: "ordenar",
    imgTask: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\deportes\futbol.jpg",
    durationInSecs:5400
    },

    {
    idTask: 4,
    nameTask: "merendar",
    imgTask: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\deportes\tenis.jpg",
    durationInSecs:6000
    },

    {
    idTask: 5,
    nameTask: "enseñar",
    imgTask: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\deportes\voleibol.jpg",
    durationInSecs:8400
    },

  ]


//Enumeradaor de id de tareas. Suma 1
  idTask: number = this._tasks.length+1;
  constructor() { 
  }


  //Recupera tareas
  getTasks(){
    return this._tasks;
  }

  //Recupera tareas por id
  getTaskById(idTask: number){
    return this._tasks.find(c => c.idTask == idTask);
  }


  //Borra tareas
  deleteTaskById(idTask: number){
    this._tasks = this._tasks.filter(c => c.idTask != idTask);
  }


  //Añade tareas
  addTask(task: Task){
    task.idTask = this.idTask++;
    this._tasks.push(task);
  }


  //Actualiza tareas
  updateTask(task: Task){
    var _task = this._tasks.find(c => c.idTask == task.idTask);
    if(_task){
      _task.nameTask = task.nameTask;
      _task.imgTask = task.imgTask;
      _task.durationInSecs = task.durationInSecs;
    }
  }
  
}
