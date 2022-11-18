import { LowerCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Assignment, Customer, Task } from '../../models';
import { CustomersService, TasksService } from '../../services';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-assignment-calendar',
  templateUrl: './assignment-calendar.component.html',
  styleUrls: ['./assignment-calendar.component.scss'],
})
export class AssignmentCalendarComponent implements OnInit {

  @Input() assignment:Assignment;
  isLowResolution = LowerCasePipe;
  constructor(
    private customersSvc:CustomersService,
    private taskSvc:TasksService,
    private assignmentsSvc:AssignmentsService,
  ) { }

  ngOnInit() {}

  getTask():Task{
    var idTask = this.assignment.idTask;
    if(idTask){
      return this.taskSvc.getTaskById(idTask);
      return undefined;
    }
  }

  getCustomer():Customer{
    var idCustomer = this.assignment.idCustomer;
    if(idCustomer){
      return this. customersSvc.getCustomerById(idCustomer);
      return undefined;
    }
  }


}


