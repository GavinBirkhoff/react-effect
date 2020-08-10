import * as React from "react";
import { ILayout } from "./PropsType";
export interface IProps {
    prefixCls?: string;
    layout: ILayout[];
}
interface IState {
}
declare class DockContent extends React.Component<IProps, IState> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
    private dockable;
    private createDock;
    private createDockContent;
}
export default DockContent;
