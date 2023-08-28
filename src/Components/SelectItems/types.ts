import React from 'react';
import { Options } from 'react-hotkeys-hook';

/**
 * 表示一个包含单项元素和相关信息的接口
 * @template T 单项元素的类型
 */
export interface SelectItemProps<T extends {} = {}> {
    /**
     * 数据中的单项元素
     */
    item: T;

    /**
     * 数据中该项元素对应的索引
     */
    index: number;

    /**
     * 该项元素是否处于选中状态
     */
    isActive: boolean;

    ref: (element: HTMLElement | null) => void;
}

/**
 * 表示用于呈现选项列表的接口
 * @template T 列表项元素类型
 */
export interface SelectItemsProps<T extends {} = {}> {
    /**
     * 选中项的位置索引，受控模式
     * @default 0
     */
    activeIndex: number;

    /**
     * 数据列表
     */
    data: T[];

    /**
     * 选中某项元素后的回调函数
     */
    onItemSelect?: (index: number, data: T) => void;

    /**
     * 定义呈现列表内容的子组件
     */
    children: (item: SelectItemProps<T>) => React.ReactNode;

    /**
     * 数据变化是否index重置为0
     * @default true
     */
    resetWhenDataChange?: boolean;

    /**
     * 容器样式
     */
    style?: React.CSSProperties;

    /**
     * 启用热键
     * @default true
     */
    enabled?: boolean;

    /**
     *  useHotkeys的options配置
     *
     *  https://react-hotkeys-hook.vercel.app/docs/3.x/api/use-hotkeys
     */
    hotKeyOptions?: Options;
}
