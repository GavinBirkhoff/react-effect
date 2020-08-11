import * as React from "react";
import { IProps } from "./PropsType";
export interface IState {
}
export declare class Notification {
    private static lastUID;
    private UID;
    constructor(message: string | JSX.Element);
    modal(): this;
    clickable(): this;
    modalable(): this;
    declineButton(text: string): this;
    acceptButton(text: string): this;
    timer(timerS: number): this;
    onResult(onResult: (ok: boolean) => void): this;
    didMount(didMount: () => void): this;
    delete(result: boolean): void;
    private find;
}
declare class NotificationView extends React.Component<IProps, IState> {
    static Notification: typeof Notification;
    static defaultProps: {
        prefixCls: string;
    };
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private notifications;
    private hasButtons;
    private buttons;
    private extraDidMount;
}
export default NotificationView;
