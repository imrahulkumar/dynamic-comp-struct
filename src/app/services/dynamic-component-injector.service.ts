import { Injectable, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import {ControlTypes} from '../utils/shared.model'
import { TabularStructComponent } from '../facet-component/tabular-struct/tabular-struct.component';
import { TabularStructMidComponent } from '../facet-component/tabular-struct-mid/tabular-struct-mid.component';

@Injectable()
export class DynamicComponentInjectorService {
    components: any;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.components = {
          [ControlTypes.TableType1.id]:TabularStructComponent,
          [ControlTypes.TableType2.id]:TabularStructMidComponent,

        }
      }
      /**
       * 
       * @param componentType This indicate the id of the component. 
       * @param componentData All the '@input' data is contain.
       * @param container This is the reference of the view child from the dunamic component.
       */
      injectComponent(componentType, componentData, container) {
        if (this.components[componentType]) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[componentType]);
            let element = container.createComponent(componentFactory);
            for (var key in componentData) {
                if (componentData.hasOwnProperty(key)) {
                    element.instance[key] = componentData[key];
                }
            }

            return { component: element._component, element: element, container: container };
        } else {
            return null;
        }
    }
}
