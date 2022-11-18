import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousesPageRoutingModule } from './houses-routing.module';

import { HousesPage } from './houses.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousesPageRoutingModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
  ],
  declarations: [HousesPage]
})
export class HousesPageModule {}
