//import { CustomerDetailComponent } from './../../core/components/customer-detail/customer-detail.component';
import { ModalController } from '@ionic/angular';

//IMPORTACIÓN DEL CUSTOMER SERVICE
import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modal/customer';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})


export class CustomersPage implements OnInit {

  customer: Customer;

  //sALE POR LA AUTOCORRECCIÓN, NO PORQUE QUIERA
  alert: any;
  
  constructor(
    private modal:ModalController,

    //AÑADIMOS EL CUSTOMER SERVICE PARA QUE EL MÉTODO FUNCIONE
    private customerSvc: CustomersService,
    
    //EL CONSTRUCTOR NO PILLA EL CUSTOMER DETAIL COMPONENT A PESAR DE RECICBIR LA IMPORTACIÓN
  //  private customerDetail: CustomerDetailComponent


  ) { }


  async presentCustomerForm(customer:Customer){
    const modal = await this.modal.create({
     component:CustomerDetailComponent,
      componentProps:{
        person:customer
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
  //         this.customerSvc.updateCustomer(result.data.customer);
            break;
          default:
        }
      }
    });
  }




  async presentCustomerForm(customer:Customer){
    const modal = this.modal.create({
      component: CustomerDetailComponent,
      componentProps:{
        customer:customer
      }
    });

    
    //NO PILLA THEN. ¿pOR QUÉ?
    //El sistema se inventa aquí un await.


    modal.present();
    modal.onDidDismiss().then=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.customerSvc.addCustomer(result.data.customer);
            break;
          case 'Edit':
            this.customerSvc.updatePerson(result.data.customer);
            break;
            default:
        }
      }
    }

  }







  ngOnInit() {
  }

  //VAYA. RESULTA QUE SÍ ESTÁ EL MÉTODO GET CUSTOMER QUE NO PILLA EL HTML.
  getCustomer = this.customerSvc.getCustomer;
  onEditCustomer = this.customerSvc.updatePerson;
  onDeleteCustomer = this.customerSvc.deleteCustomerById;
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
