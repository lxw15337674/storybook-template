import React from 'react';

export interface FloatContainerProps extends StyledFloatContainerProps {
    visible?: boolean;
    children?: React.ReactNode;
    onClickAway?: (event: Event) => void;
}

export interface StyledFloatContainerProps {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    visible?: boolean;
    position?: 'fixed' | 'absolute';
    zIndex?: number;
}
