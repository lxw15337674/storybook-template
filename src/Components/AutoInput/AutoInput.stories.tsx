import { Meta } from '@storybook/react';
import React from 'react';
import AutoInput from './AutoInput';

/**
 * 1. 自适应宽高。
 * 2. 支持受控与非受控两种方式
 * 3. 默认占据整行
 */
export default {
  title: '功能组件/AutoInput 输入框',
  component: AutoInput,
  tags: ['autodocs'],
} as Meta<typeof AutoInput>;

export const Primary = {
  args: {
    defaultValue: 'content123',
  },
};
/**
 *  行内组件
 */
export function inlineInput() {
  return (
    <div>
      <AutoInput style={{ width: '200px' }} />
    </div>
  );
}

/**
 *  块组件
 */
export function BlockInput() {
  return (
    <div>
      <AutoInput style={{ width: '200px' }} />
    </div>
  );
}
