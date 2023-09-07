import styled, { css } from 'styled-components';
import { StyledStatusElementProps } from '.';

export const StyledItem = styled.div<StyledStatusElementProps>`
  padding: 8px;
  font-size: 12px;
  cursor: pointer;
  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }}
  &.normal {
    color: rgba(3, 9, 17, 0.85);
  }
  &.disabled {
    color: rgba(3, 9, 17, 0.4);
    cursor: not-allowed;
  }
  &.hover {
    background-color: rgba(3, 9, 17, 0.04);
  }
  &.active {
    color: #1a7af8;
    background-color: rgba(26, 122, 248, 0.08);
  }
  &.active.hover {
    background-color: rgba(26, 122, 248, 0.12);
  }
`;

export default StyledItem;
