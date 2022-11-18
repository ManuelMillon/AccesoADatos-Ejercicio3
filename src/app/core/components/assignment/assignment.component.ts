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



//input y outputs. Sólo necesita el input del assignment. 
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:Assignment;
  @Input() customer: Customer;
  @Input() task: Task;

  

  //Constructor. Trabaja con los servicios. 
  constructor(
    private customersSvc:CustomersService,
    private tasksSvc:TasksService,
    private  assignmentsSvc: AssignmentsService,

    //EL ERROR SE ENCUENTRA AQUÍ, NO SE RECONOCE EL ASSIGNMENTSSVC Y NO SÉ POR QUÉ NO SE CORRIGE. 


  ) { }

  ngOnInit() {}



  //Método para coger tarea
  
  /**
  
  getTask():Task{
      var idTask = this.assignment.idTask;
      if(idTask)
      return this.tasksSvc.getTaskById(idTask);
      return undefined;
    }

 */


    //Método para recoger al cliente. 
  getCustomer():Customer{
    var idCustomer = this.assignment.idCustomer; 
    if(idCustomer){
      return this.customersSvc.getCustomerById(idCustomer);
      return undefined;

    }
  }

  /**
   *  async presentTaskForm(task:Task){
   *    const modal = await this.modal.create
   *      component: TaskDetailComponent,
   *       componentProps: {
   *          task:task
   *        },
   *      cssClass: "modal-full-right-side"
   * });
   *     modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.tasksSvc.addTask(result.data.task);
            break;
          case 'Edit':
            this.tasksSvc.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
   * 
   *  
   */

    getAssignments() {
      return this.assignmentsSvc.getAssignments();
    }

//Método para editar la asignación. 
  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  //Método para borrar la asignación. 
  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }




}
