import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalPageRoutingModule } from './personal-routing.module';

import { PersonalPage } from './personal.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    PersonalPageRoutingModule
  ],
  declarations: [PersonalPage]
})
export class PersonalPageModule {}
