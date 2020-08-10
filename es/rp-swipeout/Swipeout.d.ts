import React from "react";
import SwipeoutPropType from "./PropTypes";
export default class Swipeout extends React.Component<SwipeoutPropType, any> {
    static defaultProps: {
        prefixCls: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    openedLeft: boolean;
    openedRight: boolean;
    content: any;
    cover: any;
    left: any;
    right: any;
    btnsLeftWidth: number;
    btnsRightWidth: number;
    swiping: boolean;
    needShowLeft: boolean;
    needShowRight: boolean;
    constructor(props: SwipeoutPropType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCloseSwipe: (ev: any) => void;
    onPanStart: (e: any) => void;
    onPanMove: (e: any) => void;
    onPanEnd: (e: any) => void;
    doOpenLeft: () => void;
    doOpenRight: () => void;
    onBtnClick(ev: React.MouseEvent<HTMLDivElement, MouseEvent>, btn: {
        onPress: any;
    }): void;
    _getContentEasing(value: number, limit: number): number;
    _setStyle: (value: number) => void;
    open: (value: number, openedLeft: boolean, openedRight: boolean) => void;
    close: () => void;
    renderButtons(buttons: any[] | undefined, ref: string): JSX.Element | null;
    onTouchMove: (e: {
        preventDefault: () => void;
    }) => void;
    render(): JSX.Element;
}
