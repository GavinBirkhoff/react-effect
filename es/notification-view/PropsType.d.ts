/// <reference types="react" />
export interface IProps {
    prefixCls?: string;
    className?: string;
    extraCoverName?: string;
    extraMessageName?: string;
    extraButtons?: string;
    extraButton?: string;
    activeName?: string;
}
export interface INotification {
    uid: number;
    modal: boolean;
    jsx: JSX.Element;
    text: string;
    declineButton?: string;
    acceptButton?: string;
    timerS?: number;
    created: number;
    md5: string;
    clickable: boolean;
    modalable: boolean;
    onResult?: (ok: boolean) => void;
    didMount?: () => void;
}
