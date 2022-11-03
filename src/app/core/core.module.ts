import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AssignmentComponent, AssignmentDetailComponent } from './components';
import { CustomerSelectableComponent } from './components/person-selectable/person-selectable.component';
import { CustomersComponent } from './components/customers/customers.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerSelectableComponent, 
    CustomersComponent,
    TaskComponent, TaskDetailComponent, TasksComponent,
    AssignmentComponent, AssignmentDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  exports:[CommonModule, FormsModule, IonicModule, ReactiveFormsModule, CustomerComponent, CustomerDetailComponent, CustomersComponent,
  TaskComponent, TaskDetailComponent, TasksComponent, AssignmentComponent, AssignmentDetailComponent, CustomerSelectableComponent]
  }
)

export class CoreModule { }
