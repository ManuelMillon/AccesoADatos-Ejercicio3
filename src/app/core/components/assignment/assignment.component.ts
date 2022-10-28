import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment, Customer, Task } from '../../models';
import { CustomersService, TasksService } from '../../services';
import { AssignmentsService } from '../../services/assignments.service';

//IMPORTACIÓN DE ASSIGNMENTSSERVICE PRESUNTAMENTE REALIZADA. 


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {



  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment: Assignment;
  
  constructor(
    private customersSvc:CustomersService,
    private tasksSvc:TasksService,
    private  assignmentsSvc: AssignmentsService,

    //EL ERROR SE ENCUENTRA AQUÍ, NO SE RECONOCE EL ASSIGNMENTSSVC Y NO SÉ POR QUÉ NO SE CORRIGE. 


  ) { }

  ngOnInit() {}


  getTask():Task{
      var idTask = this.assignment.idTask;
      if(idTask)
      return this.tasksSvc.getTaskById(idTask);
      return undefined;
    }

  getCustomer():Customer{
    var idCustomer = this.assignment.idCustomer; 
    if(idCustomer){
      return this.customersSvc.getCustomerById(idCustomer);
      return undefined;

      //POSIBLE ERROR EN EL RETURN ANTERIOR. DETECTADO POR LA DIFERENCIA DE COLOR. 
    }
  }


  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }
}
