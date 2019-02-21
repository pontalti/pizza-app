import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/share/interfaces/FieldConfig-interface';

@Component({
  selector: "app-radiobutton",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label class="radio-label-padding">{{field.label}}:</label>
      <mat-radio-group [formControlName]="field.name">
      <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
      </mat-radio-group>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </div>
    `,
  styles: []
})
export class RadiobuttonComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() {
    
  }
  
  ngOnInit() {

  }
}