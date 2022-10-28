import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Assignment, AssignmentDetailComponent } from 'src/app/core';
import { AssignmentsService } from 'src/app/core/services/assignments.service';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

  assignment:Assignment;

  alert:any;




  constructor(
    
    private modal:ModalController,
    private assignmentSvc: AssignmentsService,
  ) { }


  async presentAssignmentForm(assignment:Assignment){
    const modal = await this.modal.create({
     component:AssignmentDetailComponent,
      componentProps:{
        assignment:assignment
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignmentSvc.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentSvc.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  ngOnInit() {
  }

  
  getAssignments(){
    return this.assignmentSvc.getAssignments();
  }
  onEditAssignment(assignment){
    this.presentAssignmentForm(assignment)
  }

  
  onDeleteAssignment(assignment){
    this.assignmentSvc.deleteAssignmentById(assignment.idAssignment);

  }
  onNewAssignment(){
    this.presentAssignmentForm(null);
  }


//POR QUÉ NO PILLA EL ALERT?
  async onDeleteAlert(assignment){
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
          this.assignmentSvc.deleteAssignmentById(this.assignment.idAssignment);
        }
      }

    ]
    })

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }
}
