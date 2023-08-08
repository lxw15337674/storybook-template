import React from 'react';
import StyledAutoInput from './styled';
import { AutoInputProps } from './types';
import { useControllableValue } from 'wwhooks';

const AutoInput = (props: AutoInputProps) => {
  const {
    value,
    defaultValue = '',
    onChange,
    style,
    width = '100%',
    className,
    ...textareaRef
  } = props;
  const [state, setState] = useControllableValue<string>(
    {
      value,
      defaultValue,
    },
    onChange,
  );
  return (
    <StyledAutoInput width={width} style={style} className={className}>
      <span>{state}</span>
      <textarea
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        {...textareaRef}
      />
    </StyledAutoInput>
  );
};
export default AutoInput;
