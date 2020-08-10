/// <reference types="react" />
export declare type Dock = "left" | "bottom" | "right" | "top";
export interface IDockable {
    style?: string | React.CSSProperties;
    jsx?: JSX.Element | JSX.Element[];
}
export interface ILayout {
    dock: Dock;
    style: string | React.CSSProperties;
    dockables: IDockable[];
}
export interface IDock {
    dock: Dock;
    style: string | React.CSSProperties;
    jsx: JSX.Element[];
}
