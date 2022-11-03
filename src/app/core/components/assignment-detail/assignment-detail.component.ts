import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      this.form.controls.idAssignment.setValue(assignment.idAssignment);
      this.form.controls.idTask.setValue(assignment.idTask);
      this.form.controls.idCustomer.setValue(assignment.idCustomer);
      this.form.controls.createTask.setValue(assignment.createTask)
      this.form = this.fb.group({
        id:[null],
        taskId:[-1, [Validators.min(1)]],
        customerId:[-1,[Validators.min(1)]],
        createTask:['', Validators.required],
      });
    }
  }

  constructor(
    private tasksSvc:TasksService,
    private customersSvc:CustomersService,
    private assignmentsSvc:AssignmentsService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { 


  }

  ngOnInit() {}

  
  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeCreateTask(createTask){
    this.form.controls.createTask.setValue(createTask);
  }


}
