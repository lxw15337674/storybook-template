import { useClickAway, useSize, useUpdateEffect } from 'wwhooks';
import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { PopoverProps } from './types';

function Popover({
  children,
  popper,
  options,
  visible,
  container = () => document.body,
  onClickAway = () => {},
}: PopoverProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [_, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement!,
    options,
  );
  const size = useSize(referenceElement);
  const { run, stop } = useClickAway(popperElement!, onClickAway);
  useUpdateEffect(() => {
    if (visible) {
      run();
    } else {
      stop();
    }
  }, [visible]);
  // referenceElement变化，重新计算位置
  useEffect(() => {
    if (visible) {
      update?.();
    }
  }, [size, visible]);
  return (
    <Fragment>
      <div
        ref={setReferenceElement}
        onClick={() => {
          update?.();
        }}
      >
        {children}
      </div>
      {referenceElement &&
        ReactDOM.createPortal(
          visible && (
            <div
              ref={setPopperElement}
              className="popover"
              style={styles.popper}
              {...attributes.popper}
            >
              {popper}
              <div ref={setArrowElement} style={styles.arrow} />
            </div>
          ),
          container(referenceElement!),
        )}
    </Fragment>
  );
}

export default Popover;
