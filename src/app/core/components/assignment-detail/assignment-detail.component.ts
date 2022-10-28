import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../../models';
import { CustomersService, TasksService } from '../../services';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('assignment') set assignment(assignment:Assignment){
    if(assignment){
      this.form.controls.id.setValue(assignment.idAssignment);
      this.form.controls.idTask.setValue(assignment.idTask);
      this.form.controls.idCustomer.setValue(assignment.idCustomer);
      this.form.controls.doTask.setValue(assignment.doTask)
      this.form.controls.createTask.setValue(assignment.createTask)

    }
  }

  constructor(
    private tasksSvc:TasksService,
    private customersSvc:CustomersService,
    private assignmentsSvc:AssignmentsService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { }

  ngOnInit() {}

  
  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }


}
