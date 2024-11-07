import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee2Component } from './employee2/employee2.component';
import { FormsModule } from '@angular/forms';
import { Employee3Component } from './employee3/employee3.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Employee4Component } from './employee4/employee4.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { Contact01Component } from './contact01/contact01.component';
import { Home01Component } from './home01/home01.component';
import { Product01Component } from './product01/product01.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ValidationTemplateComponent } from './validation-template/validation-template.component';
import { ValidationReactiveComponent } from './validation-reactive/validation-reactive.component';
import { PasswordmatchDirective } from './directives/passwordmatch.directive'

@NgModule({
  declarations: [
    AppComponent,
    Employee2Component,
    Employee3Component,
    HighlightDirective,
    Employee4Component,
    Assignment6Component,
    Contact01Component,
    Home01Component,
    Product01Component,
    ProductDetailsComponent,
    ErrorComponent,
    ValidationTemplateComponent,
    ValidationReactiveComponent,
    PasswordmatchDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
