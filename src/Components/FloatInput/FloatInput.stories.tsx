import { Meta } from '@storybook/react';
import styled from 'styled-components';
import FloatInput from './FloatInput';
import React, { useState } from 'react';

/**
 * 1. 自适应宽高。
 * 2. 支持受控与非受控两种方式
 */
export default {
  title: '功能组件/FloatInput  悬浮输入框',
  component: FloatInput,
  tags: ['autodocs'],
} as Meta<typeof FloatInput>;

export const Primary = {
  args: {
    children: 'content123',
  },
};

const StyledContent = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`;

// export function basicDemo() {
//   const [visible, setVisible] = useState(true);
//   return (
//     <div style={{ height: 200 }}>
//       <button
//         onClick={(e) => {
//           setVisible((v) => !v);
//           e.stopPropagation();
//         }}
//       >
//         {visible ? '隐藏' : '显示 '}
//       </button>
//       <FloatInput
//         left={100}
//         top={0}
//         visible={visible}
//         onClickAway={() => {
//           setVisible(false);
//         }}
//       >
//         <StyledContent>点击外层会关闭123</StyledContent>
//       </FloatInput>
//     </div>
//   );
// }

export function FloatInputDemo() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  console.log('ref', ref);
  return (
    <div>
      <div
        ref={(ref) => {
          setRef(ref);
        }}
      >
        input 起始位置
      </div>
      <FloatInput container={ref ?? document} defaultValue="" />
    </div>
  );
}
