import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
// import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import {FormsModule} from '@angular/forms';

@NgModule({
     declarations: [PaginationComponent,  FooterComponent, SidebarComponent ],//,LoginComponent],
     exports: [PaginationComponent,  FooterComponent, SidebarComponent ],//,LoginComponent],
  // declarations: [PaginationComponent, HeaderComponent, FooterComponent, SidebarComponent ,LoginComponent],
  // exports: [PaginationComponent, HeaderComponent, FooterComponent, SidebarComponent ,LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
   // FormsModule
  ]
})
export class PagesModule { }
