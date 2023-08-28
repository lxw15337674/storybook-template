import React from 'react';

export type CascaderOptionValue = string | number;

export interface CascaderOptionType<T> {
    /**
     * 选项禁用
     */
    disabled?: boolean;
    /**
     * 子节点
     */
    children?: Array<CascaderOptionType<T> & T>;
}

export interface CascaderProps<T> {
    /**
     * 选项列表
     **/
    options: Array<CascaderOptionType<T> & T>;
    /**
     *  选中值
     **/
    value?: CascaderOptionValue[];

    /**
     *  判断选中的字段
     */
    activeField: string;

    /**
     * 自定义选项
     */
    renderMenuItem: (
        option: CascaderOptionType<T> & T,
        onItemSelect: () => void,
        active: boolean,
        level: number
    ) => React.ReactNode;
    /**
     *  自定义渲染菜单列表
     */
    renderMenu?: (menus: React.ReactNode, level: number) => React.ReactNode;
    /**
     *  选项被点击选择后的回调函数
     */
    onSelect?: (value: CascaderOptionValue[]) => void;
}
