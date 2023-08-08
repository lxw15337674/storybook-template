import { Meta } from '@storybook/react';
import FloatContainer from '.';
import React, { useState } from 'react';
import styled from 'styled-components';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export 
export default {
  title: '功能组件/FloatContainer',
  component: FloatContainer,
  parameters: {
    componentSubtitle: '悬浮容器',
  },
  tags: ['autodocs'],
} as Meta<typeof FloatContainer>;

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

export function basicDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ height: 200 }}>
      <button
        onClick={(e) => {
          setVisible((v) => !v);
          e.stopPropagation();
        }}
      >
        {visible ? '隐藏' : '显示 '}
      </button>
      <FloatContainer
        left={100}
        top={0}
        visible={visible}
        onClickAway={() => {
          setVisible(false);
        }}
      >
        <StyledContent>点击外层会关闭123</StyledContent>
      </FloatContainer>
    </div>
  );
}
 