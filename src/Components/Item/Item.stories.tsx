import { Meta, StoryObj } from '@storybook/react';
import { Item } from '.';
import React from 'react';

/**
 * 1. 具备普通状态，禁用状态，激活状态。
 * 2. 不同状态间是互斥的，并会写入 className 中，具体见例子。
 * 3. 禁用状态优先级最高。
 * 4. 非禁用状态下，聚焦时 className 会增加 hover。
 */
export default {
  title: '样式组件/Item 激活状态组件',
  component: Item,
  parameters: {
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Item>;

type Story = StoryObj<typeof Item>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: '文本',
    active: true,
  },
};

export function inlineInput() {
  return (
    <div>
      <p>
        <Item>普通态，此时class为normal,hover时会有hover class</Item>
      </p>
      <p>
        <Item active>激活态，此时class为active，hover时会有hover class</Item>
      </p>
      <p>
        <Item disabled>禁用态，此时class为disabled，永远不会有hover class</Item>
      </p>
      <p>
        <Item disabled active>
          禁用态优先级最高，所以此时class为disabled
        </Item>
      </p>
      <p>
        <Item active width="100px">
          宽度
        </Item>
      </p>
    </div>
  );
}
