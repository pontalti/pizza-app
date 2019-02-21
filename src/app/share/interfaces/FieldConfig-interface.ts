export interface FieldConfig {
    type: string;
    label?: string;
    name?: string;
    disabled: boolean;
    inputType?: string;
    options?: string[];
    collections?: any;
    value?: any;
    validations?: any[];
  }