import { Component, OnInit, ViewChild, Input, ViewContainerRef, EventEmitter, Output, ChangeDetectorRef, AfterViewInit, SimpleChanges, SimpleChange } from '@angular/core';
import { DynamicComponentInjectorService } from 'src/app/services/dynamic-component-injector.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild("cont", { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() controlTypeId: any;
  @Input() options: any;
  @Output() optionsChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() initialized: EventEmitter<any> = new EventEmitter<any>();
  loader: boolean = true;
  element: any;
  component: any;
  
  constructor(public cdRef: ChangeDetectorRef, private componentInjector: DynamicComponentInjectorService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    if (this.controlTypeId) {
      let component = this.componentInjector.injectComponent(this.controlTypeId, this.options, this.container);
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
          // if the output emitter is not in form of @input name + 'Changes'
          // then we have to write hard code to listen the changes.
        // component.element.instance['onSave'].subscribe((val) => {          
        //   this.optionsChange.emit(val);
        // });

      }
     
      this.loader = false;
      this.cdRef.detectChanges();
      this.initialized.emit(this.component);
    } else {
      this.loader = false;
      this.cdRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const controlTypeId: SimpleChange = changes.controlTypeId;

    if (controlTypeId && !controlTypeId.firstChange && this.container) {
      this.container.remove();
      this.init();
    }
  }
}
