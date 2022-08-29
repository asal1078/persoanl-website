import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componensts/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './componensts/bread-crumb/bread-crumb.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    BreadCrumbComponent
  ]
})
export class ShareModule { }
