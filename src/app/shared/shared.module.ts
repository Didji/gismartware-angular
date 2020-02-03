import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, SectionComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
