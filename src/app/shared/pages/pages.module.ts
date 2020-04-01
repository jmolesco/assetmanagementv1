import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PaginationComponent, HeaderComponent, FooterComponent, SidebarComponent],
  exports: [PaginationComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
