import { FieldConfig } from './FieldConfig-interface';

export interface TabConfig{
    type: string;
    label: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    disabled?: boolean;
    isActive?: boolean;
    origin?: number;
    position?: number;
    fields?: FieldConfig[];
}