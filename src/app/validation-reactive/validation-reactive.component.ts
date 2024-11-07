import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms'
import { passwordMatch } from './passwordmatch';

@Component({
  selector: 'app-validation-reactive',
  templateUrl: './validation-reactive.component.html',
  styleUrls: ['./validation-reactive.component.scss']
})
export class ValidationReactiveComponent {
  title="Employee Registration Form";
  emailregex= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  RegisterForm = new FormGroup({
   name:new FormControl('',[Validators.required]),
   email:new FormControl('',[Validators.required,Validators.pattern(this.emailregex)]),
   address:new FormControl('',[Validators.required]),
   city:new FormControl('',[Validators.required]),
   phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
   password:new FormControl('',[Validators.required,Validators.minLength(6)]),
   confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
   check:new FormControl('',[Validators.required]),
  },[passwordMatch("password","confirmpassword")])

  getControl(name:any): AbstractControl | null {
    return this.RegisterForm.get(name)
  }
  Registeruser(data:any){
    console.log(data.value)
  }
}
