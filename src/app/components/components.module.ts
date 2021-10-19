import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SocialsComponent } from './socials/socials.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }
