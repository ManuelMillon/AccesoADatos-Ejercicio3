import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {


  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() customer:Customer;

  constructor(private customerSvc: CustomersService) { }

  ngOnInit() {}


  onEditClick(){
    this.onEdit.emit(this.customer);
  }

  onDeleteClick(){
    this.onDelete.emit(this.customer);
  }
}
