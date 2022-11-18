import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { House } from '../../models';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent implements OnInit {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('house') set house(house: House){
  if(house){
    this.form.controls.idHouse.setValue(house.idHouse);
    this.form.controls.nameHouse.setValue(house.nameHouse);
    this.form.controls.priceHouse.setValue(house.priceHouse);
    this.form.controls.cityHouse.setValue(house.cityHouse);
    this.mode = "Edit";
  }
  }
  
    constructor(
      private fb:FormBuilder,
      private modal: ModalController) { 
        this.form = this.fb.group({
          idHouse:[null],
          nameHouse:['', [Validators.required]],
          priceHouse:['', [Validators.required]],
          cityHouse:['', [Validators.required]],
        })
      }
  
    ngOnInit() {
    }
  
    onSubmit(){
      this.modal.dismiss({house: this.form.value, mode: this.mode}, 'ok');
    }
  
    onDismiss(result){
      this.modal.dismiss(null, 'cancel');
    }
  }
  