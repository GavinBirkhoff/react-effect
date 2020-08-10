import * as React from "react";
import { CheckboxPropsType } from "./PropsType";
export interface CheckboxProps extends CheckboxPropsType {
    prefixCls?: string;
    className?: string;
    name?: string;
    wrapLabel?: boolean;
    style?: React.CSSProperties;
    id?: string;
    type?: string;
    readOnly?: any;
    tabIndex?: any;
    onClick?: any;
    onFocus?: any;
    onBlur?: any;
    autoFocus?: any;
    value?: any;
    required?: any;
}
declare class Checkbox extends React.Component<CheckboxProps, any> {
    static defaultProps: {
        prefixCls: string;
        className: string;
        style: {};
        type: string;
        defaultChecked: boolean;
        onFocus(): void;
        onBlur(): void;
        onChange(): void;
    };
    input: any;
    constructor(props: CheckboxProps);
    static getDerivedStateFromProps(nextProps: CheckboxProps, prevState: any): {
        checked: boolean | undefined;
    } | null;
    focus(): void;
    blur(): void;
    handleChange: (e: any) => void;
    saveInput: (node: any) => void;
    render(): JSX.Element;
}
export default Checkbox;
