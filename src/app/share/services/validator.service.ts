import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorService{

    constructor(){

    }

    bindValidations(validations: any) : ValidatorFn | null {
        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
              if("required"===valid.name){
                validList.push(Validators.required);
              }else if("pattern" ===valid.name){
                if (valid.validator.length > 0) {
                  validList.push(Validators.pattern(valid.validator[0]));
                }
              }else if("nullValidator" === valid.name){
                validList.push(Validators.nullValidator);
              }else if("minLength" === valid.name){
                if (valid.validator.length > 0) {
                  validList.push(Validators.minLength(valid.validator[0]));
                }
              }else if("maxLength" === valid.name){
                if (valid.validator.length > 0) {
                  validList.push(Validators.maxLength(valid.validator[0]));
                }
              }else if("min" === valid.name){
                if (valid.validator.length > 0) {
                  validList.push(Validators.min(valid.validator[0]));
                }
              }else if("max" === valid.name){
                if (valid.validator.length > 0) {
                  validList.push(Validators.max(valid.validator[0]));
                }
              }else if("email" === valid.name){
                validList.push(Validators.email);
              }
            });
            return Validators.compose(validList);
          }
          return null;
    }

}