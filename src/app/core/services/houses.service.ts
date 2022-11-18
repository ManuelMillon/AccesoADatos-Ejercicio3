import { Injectable } from '@angular/core';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})



export class HousesService {
  public _house: House[]=[
    {
      idHouse: 1,
      nameHouse: "Luxury Frontbeach Suite",
      priceHouse: 200,
      pictureHouse:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\picHouses\portadaLFS.jpg",
      cityHouse: "Málaga"
    },
    {
      idHouse: 2,
      nameHouse: "Mediterranean Suite",
      priceHouse: 80,
      pictureHouse:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\picHouses\portadaMS.jpg",
      cityHouse: "Málaga"
    },
    {
      idHouse: 3,
      nameHouse: "Royal Executive Suite",
      priceHouse: 220,
      pictureHouse: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\picHouses\portadaRES.jpg",
      cityHouse: "Málaga"
      
    },
    {
      idHouse: 4,
      nameHouse: "Deluxe Supreme Suite",
      priceHouse: 250,
      pictureHouse: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\picHouses\portadaDLS.jpg",
      cityHouse: "Málaga"
    },
    
  ]

  idHouse: number = this._house.length+1;
  constructor() {}

  getHouse(){
    return this._house;
  }

  getHouseById(idHouse: number){
    return this._house.find(h=>h.idHouse ==idHouse);
  }

  deleteHouseById(idHouse: number){
    return this._house.filter(h=> h.idHouse != idHouse);
  }


  addHouse(house: House){
    house.idHouse = this.idHouse++;
    this._house.push(house);
  }

  updateHouse(house: House){
    var _house = this._house.find(h=>h.idHouse==house.idHouse);
    if(_house){
      _house.nameHouse = house.nameHouse;
      _house.priceHouse = house.priceHouse;
      _house.cityHouse = house.cityHouse;
      _house.pictureHouse = house.pictureHouse;
    }
  }

}
