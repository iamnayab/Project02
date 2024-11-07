import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-template',
  templateUrl: './validation-template.component.html',
  styleUrls: ['./validation-template.component.scss']
})
export class ValidationTemplateComponent {
  onsubmit(contact:any){
    console.log(contact.value);
  }
}