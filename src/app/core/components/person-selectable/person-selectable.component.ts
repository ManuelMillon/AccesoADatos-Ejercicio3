import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Customer } from '../../models';
import { CustomersService } from '../../services';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomerSelectableComponent),
  multi: true
};



@Component({
  selector: 'app-customer-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers: [USER_PROFILE_VALUE_ACCESSOR]
})


export class CustomerSelectableComponent implements OnInit, ControlValueAccessor {

  selectedCustomer:Customer = null;
  propagateChange = (_: any) => {}
  idDisabled:boolean = false;




  constructor(
    private customerSvc: CustomersService
  ) { }

  writeValue(obj: any): void {
    this.selectedCustomer = this.customerSvc.getCustomerById(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.idDisabled = isDisabled;
  }

  ngOnInit() {}

  getCustomer(){
    return this.customerSvc.getCustomers();
  } 

  onCustomerClicked(customer:Customer, accordion:IonAccordionGroup){
    this.selectedCustomer = customer;
    accordion.value='';
    this.propagateChange(this.selectedCustomer.idCustomer);
  }

}
