import { Meta, StoryObj } from '@storybook/react';
import { SelectItems } from '.';
import React, { useState } from 'react';
import styled from 'styled-components';

/**
-   这是一个受控组件。

-   这是一个纯逻辑组件，没有样式。

特性：

-   支持键盘上下切换。
-   切换时会自动滚动到选中项，使其保持可视范围。

 */
export default {
  title: '功能组件/SelectSelectItemss 选项组合组件',
  component: SelectItems,
  parameters: {
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} as Meta<typeof SelectItems>;

const StyledItem = styled.div`
  border: 1px solid #ccc;
  width: 100px;
  height: 100px;
`;
const items = [
  {
    key: '1',
    label: 'item1',
  },
  {
    key: '2',
    label: 'item2',
  },
  {
    key: '3',
    label: 'item3',
  },
  {
    key: '4',
    label: 'item4',
  },
  {
    key: '5',
    label: 'item5',
  },
  {
    key: '6',
    label: 'item6',
  },
];
export function SimpleDemo() {
  const [index, setIndex] = useState(0);
  return (
    <SelectItems
      data={items}
      activeIndex={index}
      onItemSelect={(index) => {
        setIndex(index);
      }}
      style={{
        height: 200,
        overflow: 'auto',
      }}
    >
      {({ item, index, isActive, ref }) => {
        return (
          <StyledItem key={index} ref={ref}>
            {isActive ? `active ${item.label}` : item.label}
          </StyledItem>
        );
      }}
    </SelectItems>
  );
}
