import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AssignmentComponent, AssignmentDetailComponent, DateTimeSelectableComponent } from './components';
import { CustomerSelectableComponent } from './components/person-selectable/person-selectable.component';
import { CustomersComponent } from './components/customers/customers.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AssignmentCalendarComponent } from './components/assignment-calendar/assignment-calendar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';
import { utils } from 'protractor';
import { HouseComponent } from './components/house/house.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';



@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerSelectableComponent, 
    CustomersComponent,
    DateTimeSelectableComponent,
    TaskComponent, TaskDetailComponent, TasksComponent,
    AssignmentComponent, AssignmentDetailComponent, AssignmentCalendarComponent,
    HouseComponent, HouseDetailComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    ReactiveFormsModule,
  ],

  exports:[CommonModule, FormsModule, IonicModule, ReactiveFormsModule, 
    DateTimeSelectableComponent, AssignmentCalendarComponent,
    CustomerComponent, CustomerDetailComponent, CustomersComponent, CustomerSelectableComponent,
    TaskComponent, TaskDetailComponent, TasksComponent, 
    AssignmentComponent, AssignmentDetailComponent, 
    HouseComponent, HouseDetailComponent,
    HttpClientModule
]
  }
)

export class CoreModule { }


/*
*/