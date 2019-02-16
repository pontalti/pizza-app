import {ComponentFactoryResolver, 
        ComponentRef, 
        Directive, 
        Input, 
        OnInit, 
        ViewContainerRef} from "@angular/core";
import { FormGroup } from "@angular/forms";

import {FieldConfig } from '../../share/interfaces/FieldConfig-interface';
import {InputComponent} from '../material/input/input.component';
import {ButtonComponent} from '../material/button/button.component';
import {SelectComponent} from '../material/select/select.component';
import {DateComponent} from '../material/date/date.component';
import {RadiobuttonComponent} from '../material/radiobutton/radiobutton.component';
import {CheckboxComponent} from '../material/checkbox/checkbox.component';

const componentMapper = {
    input:          InputComponent,
    button:         ButtonComponent,
    select:         SelectComponent,
    date:           DateComponent,
    radiobutton:    RadiobuttonComponent,
    checkbox:       CheckboxComponent
  };

  @Directive({
    selector: "[dynamicField]"
  })
  export class DynamicFieldDirective implements OnInit {

    @Input() field: FieldConfig;
    @Input() group: FormGroup;

    componentRef: ComponentRef<any>;

    constructor(
                private resolver: ComponentFactoryResolver,
                private container: ViewContainerRef
    ){}

    ngOnInit() {
      const factory = this.resolver.resolveComponentFactory(
                                        componentMapper[this.field.type]
                                    );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }