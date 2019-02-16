import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DynamicService } from './dynamic.service';
import { FieldConfig } from '../../share/interfaces/FieldConfig-interface';

@Injectable({ providedIn: 'root'})
export class DynamicResolver implements Resolve<Observable<FieldConfig[]>>{

    constructor(private service: DynamicService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FieldConfig[]> {
        return this.service.listForm();
    }
}