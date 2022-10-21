import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskComponent } from 'src/app/core/components/task/task.component';
import { TaskDetailComponent } from 'src/app/core/components/task-detail/task-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    TasksPageRoutingModule
    
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
