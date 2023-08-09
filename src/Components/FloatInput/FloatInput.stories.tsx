import { Meta } from '@storybook/react';
import FloatInput from './FloatInput';
import React, { useState } from 'react';
import { useBoolean } from 'wwhooks';

/**
 * 1. 自适应宽高，提供最大可能的输入范围。
 * 2. 支持受控与非受控两种方式
 */
export default {
  title: '功能组件/FloatInput  悬浮输入框',
  component: FloatInput,
  tags: ['autodocs'],
} as Meta<typeof FloatInput>;

export const Primary = {
  args: {
    defaultValue: '122222222222222222222222223',
  },
};

export function FloatInputDemo() {
  const [ref, setRef] = useState<HTMLParagraphElement | null>(null);
  const [visible, setVisible] = useBoolean(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible();
        }}
      >
        {visible ? '隐藏' : '显示'}
      </button>
      <p
        ref={(ref) => {
          setRef(ref);
        }}
      >
        起始位置
      </p>
      {visible && <FloatInput container={ref} />}
    </div>
  );
}
