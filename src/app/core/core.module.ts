import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';



@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, TaskComponent, TaskDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports:[CommonModule, FormsModule, IonicModule, ReactiveFormsModule, CustomerComponent, CustomerDetailComponent,
  TaskComponent, TaskDetailComponent]
  }
)

export class CoreModule { }
