
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CoreModule,
    CustomersPageRoutingModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
