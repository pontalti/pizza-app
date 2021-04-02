import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TabConfig } from 'src/app/share/interfaces/TabConfig-interface';
import { ValidatorService } from 'src/app/share/services/validator.service';

@Component({
    selector: 'app-tab-dynamic-form',
    template: `
                <div class="ad-banner-example">
                    <h3>Advertisements</h3>
                    <form   
                      class="dynamic-form" 
                      [formGroup]="form" 
                      (submit)="onSubmit($event)">
                      <mat-tab-group>
                        <mat-tab *ngFor="let tab of tabs; let index = index" [label]="tab.label">
                            <ng-container
                              *ngFor="let field of tab.fields;"
                              dynamicField
                              [field]="field" 
                              [group]="form">
                            </ng-container>
                        </mat-tab>
                      </mat-tab-group>

                      <button 
                        type="submit" 
                        [disabled]="!form.valid && !form.pending"
                        mat-raised-button 
                        color="primary">
                        Save
                      </button>

                    </form>
                    <div class="margin-top">
                      {{ form.value | json }}
                    </div>
                </div>
                `
})
export class TabDynamicFormComponent implements OnInit, OnDestroy {

    @Input() tabs: TabConfig[];

    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;
 
    get value() {
      return  this.form.value;
    }

    constructor(private fb: FormBuilder, private validatorService : ValidatorService) {

    }
  
    ngOnInit() {
      this.form = this.createControl();
    }
  
    ngOnDestroy() {
  
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
      this.tabs.forEach(
                  tab=>{
                    tab.fields
                          .forEach(
                              field =>{
                                if (field.type === "button") return;
                                const control = this.fb.control(
                                  field.value,
                                  this.validatorService.bindValidations(field.validations || [])
                                );
                                if(field.disabled){
                                  control.disable();
                                }
                                group.addControl(field.name, control);
                              }
                            )
                        });
        return group;
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