import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee2Component } from './employee2/employee2.component';
import { Employee3Component } from './employee3/employee3.component';
import { Employee4Component } from './employee4/employee4.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { Home01Component } from './home01/home01.component';
import { Product01Component } from './product01/product01.component';
import { Contact01Component } from './contact01/contact01.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { ValidationTemplateComponent } from './validation-template/validation-template.component';
import { ValidationReactiveComponent } from './validation-reactive/validation-reactive.component';


const routes: Routes = [
{
  path: "", redirectTo: "employee2", pathMatch:"full"
},
{
  path:"employee2",component:Employee2Component
},
{
path:"employee3", component:Employee3Component
},
{
  path:"employee4", component:Employee4Component
},
{
  path:"ValidationTemplate", component:ValidationTemplateComponent
},
{
  path:"ValidationReactive", component:ValidationReactiveComponent
},
{
  path:"product01/:id",component:ProductDetailsComponent
},
{
  path:"assignment6", component:Assignment6Component,
  children:[
    {
      path:"home01", component:Home01Component
    },
    {
      path:"product01", component:Product01Component
    },
    {
      path:"contact01", component:Contact01Component
    },
  ]
},
{
  path:"**", component:ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
