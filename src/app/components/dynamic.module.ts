import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './material/input/input.component';
import { ButtonComponent } from './material/button/button.component';
import { SelectComponent } from './material/select/select.component';
import { DateComponent } from './material/date/date.component';
import { RadiobuttonComponent } from './material/radiobutton/radiobutton.component';
import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MaterialModule } from '../share/modules/material.module';
import { DynamicComponent } from './singlePage/dynamic.component';
import { TabDynamicFormComponent } from './material/tab/Tab-dynamic-form.component';
import { TabDynamicComponent } from './tabPage/tab-dynamic.component';

@NgModule({
    declarations    : [
                        InputComponent,
                        ButtonComponent,
                        SelectComponent,
                        DateComponent,
                        RadiobuttonComponent,
                        CheckboxComponent,
                        DynamicFieldDirective,
                        DynamicFormComponent,
                        DynamicComponent,
                        TabDynamicComponent,
                        TabDynamicFormComponent
                      ],
    imports         : [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialModule
                      ],
    entryComponents : [
                        InputComponent,
                        ButtonComponent,
                        SelectComponent,
                        DateComponent,
                        RadiobuttonComponent,
                        CheckboxComponent
                      ],
    exports         : [ 
                        FormsModule,
                        ReactiveFormsModule,
                        InputComponent,
                        ButtonComponent,
                        SelectComponent,
                        DateComponent,
                        RadiobuttonComponent,
                        CheckboxComponent,
                        DynamicFieldDirective,
                        DynamicFormComponent,
                        DynamicComponent,
                        TabDynamicComponent,
                        TabDynamicFormComponent
                    ]
})
export class DynamicModule{

}