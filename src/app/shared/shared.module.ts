import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } 
from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
  ],
  exports:[ NavbarComponent,
    FooterComponent, 
  ],
  bootstrap: [
    SharedModule
  ],
})
export class SharedModule { }
