import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  result: any = '0'
  factor: number

  constructor() {}

  calculate(){
    if (this.factor <100){
      this.result = this.factorial(this.factor)
    }else{
      this.result =  "Factor is too high, please enter a factor less than 100"
    }
  }

  factorial(n: number): number {
    if (n<=1) return 1;
    return n* this.factorial(n-1);
  }

  reset(){
    this.result = 0
    this.factor = null
  }

}
