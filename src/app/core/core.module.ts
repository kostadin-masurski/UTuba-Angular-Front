import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsRoutingModule } from '../items/items-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule { }
