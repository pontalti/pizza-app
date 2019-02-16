import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FieldConfig } from '../../share/interfaces/FieldConfig-interface';

@Injectable({ providedIn: 'root' })
export class DynamicService{

    constructor(private http: HttpClient) {}

    listForm() {
        return this.http.get<FieldConfig[]>('./assets/form.json');   
    }

}