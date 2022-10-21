import { Customer } from 'src/app/core/models/customer';

//SE SUPONE QUE CON FORMBUILDER TE DEBE PILLAR EL FORM
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
form: FormGroup;
mode: "New" | "Edit" = "New";
@Input('customer') set customer(customer: Customer){
if(customer){
  this.form.controls.idCustomer.setValue(customer.idCustomer);
  this.form.controls.nameCustomer.setValue(customer.nameCustomer);
  this.form.controls.surnameCustomer.setValue(customer.surnameCustomer);
  this.form.controls.emailCustomer.setValue(customer.emailCustomer);
  this.form.controls.telephoneCustomer.setValue(customer.telephoneCustomer);
  this.form.controls.pictureCustomer.setValue(customer.pictureCustomer);
  this.form.controls.nationalityCustomer.setValue(customer.nationalityCustomer);
  this.mode = "Edit";
}
}

  constructor(
    private fb:FormBuilder,
    private modal: ModalController) { 
      this.form = this.fb.group({
        idCustomer:[null],
        nameCustomer:['', [Validators.required]],
        surnameCustomer:['', [Validators.required]],
        nationalityCustomer:['', [Validators.required]],
        emailCustomer:['', [Validators.email]],
        telephoneCustomer: ['', [Validators.required]],
        pictureCustomer:['']
      })
    }

  ngOnInit() {
  }

  onSubmit(){
    this.modal.dismiss({customer: this.form.value, mode: this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }
}
