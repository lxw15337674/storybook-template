import React from 'react';
import { usePopper } from 'react-popper';

export interface PopoverProps {
    children: React.ReactNode;
    popper: React.ReactNode;
    options?: Parameters<typeof usePopper>[2];
    visible: boolean;
    container?: (referenceElement: HTMLElement) => Element | DocumentFragment;
    onClickAway?: () => void;
}
