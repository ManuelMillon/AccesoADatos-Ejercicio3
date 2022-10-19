import { Component, EventEmitter, OnInit } from '@angular/core';
import { Customer } from 'src/app/modal/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {


  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() customer:Customer;

  constructor(private customerSvc:CustomerService) { }

  ngOnInit() {}


  onEditClick(){
    this.onEdit.emit(this.customer);
  }

  onDeleteClick(){
    this.onDelete.emit(this.customer);
  }
}
