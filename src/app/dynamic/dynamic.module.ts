import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';
import { DynamicComponentInjectorService } from '../services/dynamic-component-injector.service';

@NgModule({ 
  imports: [CommonModule],
  declarations: [DynamicComponent],
  exports: [DynamicComponent],
  providers: [DynamicComponentInjectorService]
})
export class DynamicModule { }
