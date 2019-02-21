import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabConfig } from 'src/app/share/interfaces/TabConfig-interface';

@Injectable({ providedIn: 'root' })
export class TabDynamicService{

    constructor(private http: HttpClient) {}

    listTabForm() {
        return this.http.get<TabConfig[]>('./assets/tab_form.json');   
    }

}