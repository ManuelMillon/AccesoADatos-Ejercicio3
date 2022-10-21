import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('task') set task(task: Task){
    if(task){
      this.form.controls.idTask.setValue(task.idTask);
      this.form.controls.dateTask.setValue(task.dateTask);
      this.form.controls.nameTask.setValue(task.nameTask);
      this.mode = "Edit";
    }
    }

  
  constructor(
    private fb:FormBuilder,
    private modal: ModalController
  ) { 
    this.form = this.fb.group({
      idTask:[null],
      nameTask:['', [Validators.required]],
      dateTask:['', [Validators.required]],
      imgTask:[null]
  }
  )
}



  ngOnInit() {}


  onSubmit(){
    this.modal.dismiss({task: this.form.value, mode: this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }
}
