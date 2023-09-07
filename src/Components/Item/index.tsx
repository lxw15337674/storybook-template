import React, { useMemo } from 'react';
import StyledItem from './styled';
export interface StyledStatusElementProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  active?: boolean;
  disabled?: boolean;
}

export const StatusElement = (props: StyledStatusElementProps) => {
  const { children, active, disabled, className } = props;
  const [hover, setHover] = React.useState(false);
  const classNames = useMemo(() => {
    return `${className ? className : ''} 
      ${!active && !disabled ? 'normal' : ''}
      ${active && !disabled ? 'active' : ''} ${disabled ? 'disabled' : ''} ${
        hover && !disabled ? 'hover' : ''
      }`;
  }, [className, active, disabled, hover]);
  return (
    <StyledItem
      {...props}
      onMouseEnter={(e) => {
        props.onMouseEnter?.(e);
        setHover(true);
      }}
      onMouseLeave={(e) => {
        props.onMouseLeave?.(e);
        setHover(false);
      }}
      className={classNames}
    >
      {children}
    </StyledItem>
  );
};
export default StatusElement;
