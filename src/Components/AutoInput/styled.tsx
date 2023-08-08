import styled from 'styled-components';
import { AutoInputProps } from './types';

export const StyledAutoInput = styled.div<AutoInputProps>`
  border: 1px solid red;
  position: relative;
  display: inline-block;
  width: ${(props) => props.width};
  font-size: 14px;
  min-height: 12px;
  padding: 2px;
  span {
    width: auto;
    display: block;
    word-wrap: break-word;
    white-space: normal;
    max-height: inherit;
    min-height: 18px;
    font-family: inherit;
    visibility: hidden;
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
    resize: none;
    /* height: 100px; */
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
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`;

export default StyledAutoInput;
