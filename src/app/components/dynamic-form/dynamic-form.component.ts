import {Component, EventEmitter, Input, OnInit, Output, ComponentFactoryResolver, ViewChild} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import { FieldConfig } from '../../share/interfaces/FieldConfig-interface';

@Component({
    exportAs: "dynamicForm",
    selector: "dynamic-form",
    template: `
          <form   
                class="dynamic-form" 
                [formGroup]="form" 
                (submit)="onSubmit($event)">
                  <ng-container 
                    *ngFor="let field of fields;" 
                    dynamicField 
                    [field]="field" 
                    [group]="form">
                  </ng-container>
          </form>
    `,
    styles: []
  })
export class DynamicFormComponent implements OnInit {
    @Input() fields: FieldConfig[] = [];
  
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;
 
    get value() {
      return  this.form.value;
    }

    constructor(private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {}
  
    ngOnInit() {
      this.form = this.createControl();
    }

 
    onSubmit(event: Event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.form.valid) {
        this.submit.emit(this.form.value);
      } else {
        this.validateAllFormFields(this.form);
      }
    }
  
    createControl() {
      const group = this.fb.group({});
      this.fields.forEach(field => {
        if (field.type === "button") return;
        const control = this.fb.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        if(field.disabled){
          control.disable();
        }
        group.addControl(field.name, control);
      });
      return group;
    }
  
    bindValidations(validations: any) {
      if (validations.length > 0) {
        const validList = [];
        validations.forEach(valid => {
          if("required"===valid.name){
            validList.push(Validators.required);
          }else if("pattern"===valid.name){
            validList.push(Validators.pattern(valid.validator));
          }
        });
        return Validators.compose(validList);
      }
      return null;
    }
  
    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if(!control.valid){
          control.markAsTouched({ onlySelf: true });
        }else{
          control.markAsUntouched({ onlySelf: true });
        }
      });
    }
  }