import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TabConfig } from 'src/app/share/interfaces/TabConfig-interface';
import { TabDynamicService } from './tab-dynamic.service';

@Injectable({ providedIn: 'root'})
export class TabDynamicResolver implements Resolve<Observable<TabConfig[]>>{

    constructor(private service: TabDynamicService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TabConfig[]> {
        return this.service.listTabForm();
    }
    
}