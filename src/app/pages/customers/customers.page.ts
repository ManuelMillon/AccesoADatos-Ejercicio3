//import { CustomerDetailComponent } from './../../core/components/customer-detail/customer-detail.component';
import { ModalController } from '@ionic/angular';

//IMPORTACIÓN DEL CUSTOMER SERVICE
import { CustomersService } from '../../core/services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { CustomerDetailComponent } from 'src/app/core/components/customer-detail/customer-detail.component';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})


export class CustomersPage implements OnInit {

  customer: Customer;

  alert: any;
  
  constructor(
    private modal:ModalController,


    private customerSvc: CustomersService,
    
  ) { }


  async presentCustomerForm(customer:Customer){
    const modal = await this.modal.create({
     component:CustomerDetailComponent,
      componentProps:{
        customer:customer
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.customerSvc.addCustomer(result.data.customer);
            break;
          case 'Edit':
            this.customerSvc.updateCustomer(result.data.customer);
            break;
          default:
        }
      }
    });
  }

  ngOnInit() {
  }

  //VAYA. RESULTA QUE SÍ ESTÁ EL MÉTODO GET CUSTOMER QUE NO PILLA EL HTML.
  getCustomers(){
    return this.customerSvc.getCustomers();
  }
  onEditCustomer(customer){
    this.presentCustomerForm(customer)
  }

  
  onDeleteCustomer(customer){
    this.customerSvc.deleteCustomerById(customer.idCustomer);

  }
  onNewCustomer(){
    this.presentCustomerForm(null);
  }


//POR QUÉ NO PILLA EL ALERT?
  async onDeleteAlert(customer){
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
          this.customerSvc.deleteCustomerById(customer.idCustomer);
        }
      }

    ]
    })

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }


}
