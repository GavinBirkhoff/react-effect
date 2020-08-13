import * as React from "react";
import { IPopupProps } from "./PropsType";
interface IPopupState {
    selected: number;
}
declare class PopupList extends React.Component<IPopupProps, IPopupState> {
    private ref;
    private readonly windowMouseUpEventListener;
    constructor(props: IPopupProps);
    static defaultProps: {
        prefixCls: string;
    };
    static getDerivedStateFromProps(nextProps: IPopupProps, prevState: IPopupState): {
        selected: number;
    } | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * Cancel:
     * detect click outside of ref element, return current selected element
     */
    private onMouseUp;
}
export default PopupList;
