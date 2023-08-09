import React from 'react';
import { FloatInputProps } from './types';
import StyledFloatInput from './styled';
import { createPortal } from 'react-dom';
import { usePersistFn, useResizeObserver } from 'wwhooks';

const FloatInput = ({
  container = document.body,
  ...inputProps
}: FloatInputProps) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({
    maxWidth: 0,
    maxHeight: 0,
  });
  const calculatedSize = usePersistFn(() => {
    const rect = container.getBoundingClientRect();
    setStyle({
      left: rect.left,
      top: rect.top,
      maxWidth: document.body.clientWidth - rect.left - 1,
      maxHeight: window.innerHeight - rect.top - 1,
    });
  });
  useResizeObserver(container, calculatedSize);
  if (!container) return null;
  return createPortal(
    <StyledFloatInput {...inputProps} style={style} className={'test'} />,
    document.body,
  );
};
export default FloatInput;
