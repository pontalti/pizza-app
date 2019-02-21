import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/share/interfaces/FieldConfig-interface';


@Component({
  selector: "app-checkbox",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </div>
    `,
  styles: []
})
export class CheckboxComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() {

  }

  ngOnInit() {

  }
}