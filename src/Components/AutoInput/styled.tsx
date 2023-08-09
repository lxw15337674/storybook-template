import styled from 'styled-components';
import { AutoInputProps } from './types';

export const StyledAutoInput = styled.div<AutoInputProps>`
  border: 1px solid red;
  position: relative;
  display: inline-block;
  width: ${(props) => props.width};
  font-size: 14px;
  min-height: 19px;
  padding: 2px;
  max-height: 100px;
  box-sizing: border-box;
  span {
    visibility: hidden;
    height: 100px;
    width: auto;
    display: block;
    word-wrap: break-word;
    white-space: normal;
    max-height: inherit;
    min-height: inherit;
    font-family: inherit;
    padding-right: 0;
    height: inherit;
    overflow: auto;
    font-size: inherit;
  }
  textarea {
    font-family: inherit;
    width: inherit;
    height: inherit;
    min-height: inherit;
    min-width: 10px;
    box-sizing: border-box;
    resize: none;
    line-height: inherit;
    position: absolute;
    overflow: visible;
    left: 0;
    top: 0;
    bottom: 0;
    padding: inherit;
    border: none;
    font-size: inherit;
    &:focus-visible {
      outline: none;
    }
  }
`;

export default StyledAutoInput;
