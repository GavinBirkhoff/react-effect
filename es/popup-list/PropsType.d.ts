/// <reference types="react" />
export interface IPopupProps {
    prefixCls?: string;
    className?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    selected: number;
    content: React.ReactNode[];
    onTap(ele: React.ReactNode, selected: number, cancel?: boolean): void;
}
