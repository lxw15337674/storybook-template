import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import Popover from './Popover';
import styled from 'styled-components';

/**
 *  1. 基于react-popper。
 *  2. 会自动计算弹出位置，避免超出屏幕
 */
export default {
  title: '功能组件/Popover 弹出组件',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Popover>;

const StyledContent = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`;

export function SimpleDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div
      style={{
        height: 800,
        width: 200,
        overflow: 'auto',
      }}
    >
      上下拖动查看效果
      <Popover
        popper={<StyledContent>弹出内容</StyledContent>}
        visible={visible}
        options={{
          placement: 'left-end',
        }}
      >
        <button
          onClick={(e) => {
            setVisible((v) => !v);
          }}
        >
          {visible ? '隐藏' : '显示'}
        </button>
      </Popover>
    </div>
  );
}
