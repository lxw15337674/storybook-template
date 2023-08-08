import styled from 'styled-components';
import { StyledFloatContainerProps } from './types';


export const StyledFloatContainer = styled.div<StyledFloatContainerProps>`
    position: ${(props) => props.position || 'fixed'};
    left: ${(props) => props?.left}px;
    top: ${(props) => props?.top}px;
    right: ${(props) => props?.right}px;
    bottom: ${(props) => props.bottom}px;
    z-index: ${(props) => props.zIndex || 1000};
    display: ${(props) => (props.visible ? 'block' : 'none')};
`;
