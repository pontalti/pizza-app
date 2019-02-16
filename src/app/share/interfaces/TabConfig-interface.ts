import { FieldConfig } from './FieldConfig-interface';
import { Type } from '@angular/core';

export interface TabConfig{
    type: Type<any>;
    label: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    disabled?: boolean;
    isActive?: boolean;
    origin?: number;
    position?: number;
    fields?: FieldConfig[];
}