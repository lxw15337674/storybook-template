import React, { useEffect, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { SelectItemsProps } from './types';
import { usePersistFn } from 'wwhooks';

const isVisible = function (ele: HTMLElement, container: HTMLElement) {
  const { bottom, height, top } = ele.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return top <= containerRect.top
    ? containerRect.top - top <= height
    : bottom - containerRect.bottom <= height;
};

export const SelectItems = <T extends {}>({
  data,
  onItemSelect,
  children,
  activeIndex = 0,
  resetWhenDataChange = true,
  style,
  hotKeyOptions = {},
}: SelectItemsProps<T>) => {
  const itemSelect = usePersistFn((index: number) => {
    onItemSelect(index, data[index]);
  });
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (resetWhenDataChange) {
      itemSelect(0);
    }
  }, [data]);
  const itemRefs = useRef<HTMLElement | null[]>([]);
  const hotKeys = usePersistFn((keyboardEvent) => {
    const { key } = keyboardEvent;
    if (key === 'ArrowUp') {
      if (activeIndex === 0) {
        return;
      }
      itemSelect(activeIndex - 1);
      keyboardEvent.preventDefault();
      return;
    }
    if (key === 'ArrowDown') {
      if (activeIndex === data.length - 1) {
        return;
      }
      itemSelect(activeIndex + 1);
      keyboardEvent.preventDefault();
      return;
    }
  });
  useEffect(() => {
    if (
      itemRefs.current[activeIndex] &&
      containerRef.current &&
      isVisible(itemRefs.current[activeIndex], containerRef.current)
    ) {
      itemRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [activeIndex]);
  useHotkeys<HTMLDivElement>('*', hotKeys, { keydown: true, ...hotKeyOptions });

  return (
    <div className="select-container" style={style} ref={containerRef}>
      {data.map((item, index) => {
        return children({
          item,
          index,
          isActive: index === activeIndex,
          ref: (el) => {
            itemRefs.current[index] = el;
          },
        });
      })}
    </div>
  );
};
export default SelectItems;
