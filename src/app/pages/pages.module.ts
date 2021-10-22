import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
