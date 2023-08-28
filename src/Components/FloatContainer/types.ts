import React from 'react';

export interface FloatContainerProps extends StyledFloatContainerProps {
    visible?: boolean;
    children?: React.ReactNode;
    onClickAway?: (event: Event) => void;
}

export interface StyledFloatContainerProps {
    /**
 * How large should the button be?
 * @default medium
 */
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    visible?: boolean;
    position?: 'fixed' | 'absolute';
    zIndex?: number;
}
