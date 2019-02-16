import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../share/interfaces/FieldConfig-interface';

@Component({
  selector: 'app-dynamic',
  template: `
                <div class="form">
                    <div style="text-align:center">
                        <h1>
                        Dynamic Pizza Form
                        </h1>
                    </div>
                    <dynamic-form   [fields]="regConfig" 
                                    (submit)="submit($event)">
                    </dynamic-form>
                    <div class="margin-top">
                        {{ form.value | json }}
                    </div>
                </div>
  `
})
export class DynamicComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
    regConfig: FieldConfig[] = [];

    constructor(private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit() {
      this.regConfig = this.activatedRoute.snapshot.data.jsonFileConf;
    }

    submit(value: any) {
      console.log(value);
    }

}