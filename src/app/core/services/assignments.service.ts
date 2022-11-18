import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Assignment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private _assignments: Assignment[]=[
    {
      idAssignment: 1,
      idCustomer: 1,
      idTask: 1, 
      createdAt:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
    {
      idAssignment: 2,
      idCustomer: 2,
      idTask: 2, 
      createdAt:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    }

  ];

  idAssignment: number = this._assignments.length+1;

  constructor() { }



//Conseguir asignación
getAssignments(){
    
  return this._assignments;
}


//Conseguir asignación por id de asignación
getAssignmentById(idAssignment:number){
  return this._assignments.find(a=>a.idAssignment==idAssignment);
}


//Conseguir asignación por id de tarea
getAssignmentsByidTask(idTask:number):Assignment[]{
  return this._assignments.filter(a=>a.idTask
     == idTask
    );
}
//Conseguir asignación por id del cliente
getAssignmentsByidCustomer(idCustomer:number):Assignment[]{
  return this._assignments.filter(a=>a.idCustomer == idCustomer);
}

//Borrar asignación por id de asignación
deleteAssignmentByidAssignment(idAssignment:number){
  this._assignments = this._assignments.filter(a=>a.idAssignment != idAssignment); 
}

//Añadir nueva asignación
addAssignment(assignment:Assignment){
  assignment.idAssignment = this.idAssignment++;
  this._assignments.push(assignment);
}

//Actualizar asignación.
updateAssignment(assignment:Assignment){
  var _assignment = this._assignments.find(a=>a.idAssignment==assignment.idAssignment);
  if(_assignment){
    _assignment.idTask = assignment.idTask;
    _assignment.idCustomer = assignment.idCustomer;
    _assignment.createdAt = assignment.createdAt;
    _assignment.dateTime = assignment.dateTime;
    
  }
  
 }
}


