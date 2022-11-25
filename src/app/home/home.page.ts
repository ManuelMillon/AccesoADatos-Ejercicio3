import { CustomerComponent } from 'src/app/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private translate:TranslateService,
    private toastController: ToastController) {
      this.translate.setDefaultLang(this.getLanguage());
    }

  private getLanguage(){
    return this.language==0?'es':'en';
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Login pendiente de desarrollar. No hacemos las cosas para que funcionen.',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  
  language = 1; // 0 español, 1 inglés
  
  onChangeLanguage(){
    this.language = (this.language+1)%2;
    this.translate.setDefaultLang(this.getLanguage());
  }
}