import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AssignmentsService } from '../../services/assignments.service';
import { CustomersService, TasksService } from '../../services';
import { Assignment } from '../../models';
import { Customer } from '../../models';
import { Task } from '../../models';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})

export class AssignmentDetailComponent implements OnInit {

  //Formulario para rellenar asignaciones. 
  form: FormGroup;
  mode: 'New' | 'Edit' = 'New';
  @Input('assignment') set assignment(assignment: Assignment) {
    if (assignment) {
      this.form.controls.idAssignment.setValue(assignment.idAssignment);
      this.form.controls.idTask.setValue(assignment.idTask);
      this.form.controls.idCustomer.setValue(assignment.idCustomer);
      this.form.controls.datetime.setValue(assignment.dateTime);
      this.mode = 'Edit';
    }
  }

  //Constructor
  constructor(
    private tasksSvc: TasksService,
    private customersSvc: CustomersService,
    private assignmentsSvc: AssignmentsService,
    private fb: FormBuilder,
    private modal: ModalController
  ) {
    this.form = this.fb.group({
      idAssignment: [null],
      idCustomer: [-1, [Validators.min(1)]],
      idTask: [-1, [Validators.min(1)]],
      datetime: ['', [Validators.required]],
    });
  }



  ngOnInit() {}


  //Envío del modal??
  onSubmit() {
    this.modal.dismiss({ assignment: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss(result) {
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime) {
    this.form.controls.dateTime.setValue(dateTime);
  }
}
