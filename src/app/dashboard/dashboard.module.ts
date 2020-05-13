import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DynamicModule } from '../dynamic/dynamic.module';
import { TabularStructModule } from '../facet-component/tabular-struct/tabular-struct.module';

const path:Routes=[
  {path:"",component:DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(path),
    DynamicModule,
    TabularStructModule
  ]
})
export class DashboardModule { }
