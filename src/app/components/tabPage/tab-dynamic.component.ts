import { Component, OnInit, ViewChild } from "@angular/core";
import { TabConfig } from 'src/app/share/interfaces/TabConfig-interface';
import { TabDynamicFormComponent } from '../material/tab/Tab-dynamic-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dynamicTab',
    template: `
                <div class="form">
                    <div style="text-align:center">
                        <h1>
                        Dynamic tab
                        </h1>
                    </div>
                    <div>
                        <app-tab-dynamic-form 
                            [tabs]="tabConfig"
                            (submit)="submit($event)">
                        </app-tab-dynamic-form>
                    </div>
                    <div class="margin-top">
                        {{ form.value | json }}
                    </div>
                </div>
    `
  })
export class TabDynamicComponent implements OnInit {

    @ViewChild(TabDynamicFormComponent) form: TabDynamicFormComponent;

    tabConfig: TabConfig[] = [];
    
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.tabConfig =  this.activatedRoute.snapshot.data.jsonFileConf;
    }

    submit(value: any) {
        console.log(value);
    }

}