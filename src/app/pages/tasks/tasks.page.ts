import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/core/models/task';
import { TaskDetailComponent, TasksService } from 'src/app/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  task: Task;

  alert: any;

  constructor(
    private modal:ModalController,


    private taskSvc: TasksService,
  ) { }



  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
     component:TaskDetailComponent,
      componentProps:{
        task:task
      }
    });

    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskSvc.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskSvc.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }

  ngOnInit() {
  }

  getTasks(){
    return this.taskSvc.getTasks();
  }
  onEditTask(task){
    this.presentTaskForm(task)
  }

  
  onDeleteTask(task){
    this.taskSvc.deleteTaskById(task.idTask);

  }
  onNewTask(){
    this.presentTaskForm(null);
  }


//POR QUÉ NO PILLA EL ALERT?
  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Quiere borrar a este cliente?',
      buttons: [{
        text: 'Cancelar',
        role: 'Cancel',
        handler: () =>{

        }
      },
      {
        text: 'Borrar',
        role: 'confirm',
        handler: () =>{
          this.taskSvc.deleteTaskById(task.idTask);
        }
      }

    ]
    })

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

  
}
