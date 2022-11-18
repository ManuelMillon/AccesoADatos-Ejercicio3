import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public _customers: Customer[]=[
    {
    idCustomer: 1,
    nameCustomer: "Juan",
    surnameCustomer: "Solo",
    nationalityCustomer: "España",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\beckham.jpg"
    },
    {
    idCustomer: 2,
    nameCustomer: "John",
    surnameCustomer: "Smith",
    nationalityCustomer: "US",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\cristiano.jpg"
    },

    {
    idCustomer: 3,
    nameCustomer: "Johan",
    surnameCustomer: "Schmidt",
    nationalityCustomer: "Alemania",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer: "C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\gareth.jpg"
    },
    {
    idCustomer: 4,
    nameCustomer: "Mohammed",
    surnameCustomer: "Abdeselam",
    nationalityCustomer: "Marruecos",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\gareth.jpg"
    },
    {
    idCustomer: 5,
    nameCustomer: "Juan",
    surnameCustomer: "Solo",
    nationalityCustomer: "España",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\lewan.jpg"
    },
    {
    idCustomer: 6,
    nameCustomer: "John",
    surnameCustomer: "Smith",
    nationalityCustomer: "US",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\mbappe.jpg"
    },
      
    {
    idCustomer: 7,
    nameCustomer: "Johan",
    surnameCustomer: "Schmidt",
    nationalityCustomer: "Alemania",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\messi.jpg"
    },
    {
    idCustomer: 8,
    nameCustomer: "Mohammed",
    surnameCustomer: "Abdeselam",
    nationalityCustomer: "Marruecos",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\neymar.jpg"
    },
    {
    idCustomer: 9,
    nameCustomer: "Juan",
    surnameCustomer: "Solo",
    nationalityCustomer: "España",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345",
    pictureCustomer:"C:\Users\manol\IonicProjects\ejercicio3\src\assets\futbolistas\salah.jpg"
    },
    {
    idCustomer: 10,
    nameCustomer: "John",
    surnameCustomer: "Smith",
    nationalityCustomer: "US",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345"
    },

    {
      idCustomer: 11,
      nameCustomer: "Johan",
      surnameCustomer: "Schmidt",
      nationalityCustomer: "Alemania",
      emailCustomer: "aasdf@gmail.com",
      telephoneCustomer: "9203489029345"
    },
    {
    idCustomer: 12,
    nameCustomer: "Mohammed",
    surnameCustomer: "Abdeselam",
    nationalityCustomer: "Marruecos",
    emailCustomer: "aasdf@gmail.com",
    telephoneCustomer: "9203489029345"
    },
  ]


  idCustomer: number = this._customers.length+1;
  constructor() { 
  }

  getCustomers(){
    return this._customers;
  }

  getCustomerById(idCustomer: number){
    return this._customers.find(c => c.idCustomer == idCustomer);
  }

  deleteCustomerById(idCustomer: number){
    this._customers = this._customers.filter(c => c.idCustomer != idCustomer);
  }

  addCustomer(customer: Customer){
    customer.idCustomer = this.idCustomer++;
    this._customers.push(customer);
  }

  updateCustomer(customer: Customer){
    var _customer = this._customers.find(c => c.idCustomer == customer.idCustomer);
    if(_customer){
      _customer.nameCustomer = customer.nameCustomer;
      _customer.surnameCustomer = customer.surnameCustomer;
      _customer.nationalityCustomer = customer.nationalityCustomer;
      _customer.emailCustomer = customer.emailCustomer;
      _customer.telephoneCustomer = customer.telephoneCustomer;
    }
  }

}
