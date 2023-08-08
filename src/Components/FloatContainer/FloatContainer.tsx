import { useClickAway, useUpdateEffect } from 'wwhooks';
import React, { useRef } from 'react';
import { StyledFloatContainer } from './styled';
import { FloatContainerProps } from '.';

export const FloatContainer = ({
  visible = true,
  children,
  top,
  left,
  right,
  bottom,
  position,
  onClickAway,
}: FloatContainerProps) => {
  const ref = useRef(null);
  const { run, stop } = useClickAway(
    ref,
    (e) => {
      if (visible) {
        onClickAway?.(e);
      }
    },
    ['click'],
  );
  useUpdateEffect(() => {
    if (visible) {
      run();
    } else {
      stop();
    }
  }, [visible]);
  return (
    <StyledFloatContainer
      position={position}
      visible={visible}
      ref={ref}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {children}
    </StyledFloatContainer>
  );
};
export default FloatContainer;
