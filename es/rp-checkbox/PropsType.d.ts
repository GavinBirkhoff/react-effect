export interface OnChangeParams {
    target: {
        checked: boolean;
    };
    stopPropagation: any;
    preventDefault: any;
    nativeEvent: any;
}
export interface CheckboxPropsType {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (params: OnChangeParams) => void;
}
