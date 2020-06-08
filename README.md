
## DynamicCompStruct
  -  Component templates are not always fixed. An application may need to load new components at runtime.         
  -  We can use ComponentFactoryResolver to add components dynamically.

## DynamicComponentInjectorService

- To create container to append dynamic component.

```html
<ng-container #cont></ng-container>
```

```typescript
 @ViewChild("cont", { read: ViewContainerRef }) container: ViewContainerRef;
```


- Import the below file.

```typescript
import { DynamicComponentInjectorService } from 'src/app/services/dynamic-component-injector.service';
```

- To add the component dynamically.

```typescript
  let component = this.componentInjector.injectComponent(this.controlTypeId, this.options, this.container);
```

- To add @input() inside dynamic component.

```typescript
  if (component) {
        this.component = component.component;
        this.cdRef.detectChanges();
        for (let key in component.element.instance) {
          if (component.element.instance.hasOwnProperty(key + "Change")) {
              component.element.instance[key + "Change"].subscribe((val) => {
              this.options[key] = val;
              this.optionsChange.emit(this.options);
            });
          }
        }
     }
```



## Click Below for Demo
 [dynamic-comp-struct](http://dynomo.surge.sh)

 