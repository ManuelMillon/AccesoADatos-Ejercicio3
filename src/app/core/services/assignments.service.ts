import { Injectable } from '@angular/core';
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
      nameTask: "cocinar",
      nameCustomer: "Juan",
      surnameCustomer: "Solo",
      createTask: "01/01/2020",
    },
    {
      idAssignment: 2,
      idCustomer: 2,
      idTask: 2, 
      nameTask: "limpiar",
      nameCustomer: "John",
      surnameCustomer: "Smith",
      createTask: "02/02/2020",
    }

  ];

  idAssignment: number = this._assignments.length+1;

  constructor() { }




getAssignments(){
    
  return this._assignments;
}

getAssignmentById(idAssignment:number){
  return this._assignments.find(a=>a.idAssignment==idAssignment);
}

getAssignmentsByidTask(idTask:number):Assignment[]{
  return this._assignments.filter(a=>a.idTask
     == idTask
    );
}

getAssignmentsByidCustomer(idCustomer:number):Assignment[]{
  return this._assignments.filter(a=>a.idCustomer == idCustomer);
}

deleteAssignmentByidAssignment(idAssignment:number){
  this._assignments = this._assignments.filter(a=>a.idAssignment != idAssignment); 
}

addAssignment(assingment:Assignment){
  assingment.idAssignment = this.idAssignment++;
  this._assignments.push(assingment);
}


updateAssignment(assignment:Assignment){
  var _assignment = this._assignments.find(a=>a.idAssignment==assignment.idAssignment);
  if(_assignment){
    _assignment.idTask = assignment.idTask;
    _assignment.idCustomer = assignment.idCustomer;
    _assignment.nameCustomer = assignment.nameCustomer;
    _assignment.surnameCustomer = assignment.surnameCustomer;
    _assignment.createTask = assignment.createTask;
  }
  
 }
}
