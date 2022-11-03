import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Customer } from '../../models';
import { CustomersService } from '../../services';
import { AssignmentsService } from '../../services/assignments.service';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {

  constructor(
    private customersSvc:CustomersService,
    private assignmentsSvc:AssignmentsService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() {}



getCustomers(){
  return this.customersSvc.getCustomers();
}

async presentCustomerForm(customer:Customer){
  const modal = await this.modal.create({
    component:CustomerDetailComponent,
    componentProps:{
      customer:customer
    },
    cssClass:"modal-full-right-side"
  });

  modal.present();

  modal.onDidDismiss().then(result=>
    {
    if(result && result.data){
      switch(result.data.mode){
        case 'New':
          this.customersSvc.addCustomer(result.data.customer);
          break;
        case 'Edit':
          this.customersSvc.updateCustomer(result.data.customer);
          break;
        default:
      }
    }
  });
}


onEditCustomer(customer){
  this.presentCustomerForm(customer);
}

async onDeleteAlert(customer){
  const alert = await this.alert.create({
    header:'Atención',
    message: '¿Está seguro de que desear borrar al cliente?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Operacion cancelada");
        },
      },
      {
        text: 'Borrar',
        role: 'confirm',
        handler: () => {
          this.customersSvc.deleteCustomerById(customer.id);
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

async onCustomerExistsAlert(task){
  const alert = await this.alert.create({
    header: 'Error',
    message: 'No es posible borrar al cliente porque está asignada a una tarea',
    buttons: [
      {
        text: 'Cerrar',
        role: 'close',
        handler: () => {
         
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

onDeleteCustomer(customer){
   if(!this.assignmentsSvc.getAssignmentsByidCustomer(customer.id).length)
   this.onDeleteAlert(customer);
  else
    this.onCustomerExistsAlert(customer);
}

}