import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BannerComponent} from '../modules/banner/banner.component';
import {CustomersComponent} from '../modules/customers/customers.component';
import {BenefitsComponent} from '../modules/benefits/benefits.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BannerComponent,
    CustomersComponent,
    BenefitsComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    BannerComponent,
    BenefitsComponent
  ]
})

export class SharedModule {
}
