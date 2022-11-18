import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { House, HousesService } from 'src/app/core';
import { HouseDetailComponent } from 'src/app/core/components/house-detail/house-detail.component';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {

  house: House;

  alert: any;
  
  constructor(
    private modal:ModalController,
    private houseSvc: HousesService,
  ) { }


  async presentHouseForm(house:House){
    const modal = await this.modal.create({
     component:HouseDetailComponent,
      componentProps:{
        house:house
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.houseSvc.addHouse(result.data.house);
            break;
          case 'Edit':
            this.houseSvc.updateHouse(result.data.house);
            break;
          default:
        }
      }
    });
  }

  ngOnInit() {
  }

  
  getHouses(){
    return this.houseSvc.getHouse();
  }
  onEditHouse(house){
    this.presentHouseForm(house)
  }

  
  onDeleteHouse(house){
    this.houseSvc.deleteHouseById(house.idHouse);

  }
  onNewHouse(){
    this.presentHouseForm(null);
  }


//POR QUÉ NO PILLA EL ALERT?
  async onDeleteAlert(house){
    const alert = await this.alert.create({
      header: '¿Quiere borrar este apartamento?',
      buttons: [{
        text: 'Cancelar',
        role: 'Cancel',
        handler: () =>{

        }
      },
      {
        text: 'Borrar',
        role: 'confirm',
        handler: () =>{
          this.houseSvc.deleteHouseById(house.idHouse);
        }
      }

    ]
    })

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }


}
