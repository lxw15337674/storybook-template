import { Meta, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import Item from '../Item';
import { useArray } from 'wwhooks';
import Cascader from './Cascader';

/**
 *  1.  高度自定义组件，只提供逻辑和并排显示的样式。
    2. 这是一个支持受控与非受控模式的组件。
    3. 一般与 Item 组件结合使用（看代码演示）
 */
export default {
  title: '功能组件/Cascader 级联面板',
  component: Cascader,
  parameters: {
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Cascader>;


const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export function Basic() {
  return (
    <Cascader
      options={options}
      activeField="value"
      renderMenuItem={(item, onItemSelect, active) => {
        return (
          <Item width={300} onClick={onItemSelect} active={active}>
            {item.label}
          </Item>
        );
      }}
      renderMenu={(menu) => {
        return (
          <div>
            header
            {menu}
            footer
          </div>
        );
      }}
    />
  );
}
export function Controller() {
  const [value, action] = useArray([]);
  return (
    <Fragment>
      <button
        onClick={() => {
          action.reset();
        }}
      >
        reset
      </button>
      <p>value:{JSON.stringify(value)}</p>
      <Cascader
        options={options}
        value={value}
        onSelect={action.setAll}
        activeField="value"
        renderMenuItem={(item, onItemSelect, active) => {
          return (
            <Item width={300} onClick={onItemSelect} active={active}>
              {item.label}
            </Item>
          );
        }}
      />
    </Fragment>
  );
}
