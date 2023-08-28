import React, { useMemo } from 'react';
import StyledItem from './styled';
export interface StyledItemProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Item = (props: StyledItemProps) => {
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
export default Item;
