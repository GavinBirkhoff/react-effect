import * as React from "react";
import { ListViewPropsType } from "./PropsType";
export interface ListViewProps extends ListViewPropsType {
    getListViewRef?: () => any;
}
export default class ListView extends React.Component<ListViewProps, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
        width: string;
    };
    listviewRef: any;
    scrollTo: (...args: any[]) => any;
    getInnerViewNode: () => any;
    render(): JSX.Element;
}
