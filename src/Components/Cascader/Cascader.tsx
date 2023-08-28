import React, { Fragment, useEffect, useMemo } from 'react';
import _ from 'lodash';
import {
  CascaderOptionType,
  CascaderOptionValue,
  CascaderProps,
} from './types';
import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
`;

function Cascader<T extends object = object>({
  options = [],
  renderMenuItem,
  renderMenu = (menu) => menu,
  value,
  onSelect,
  activeField,
}: CascaderProps<T>) {
  const [innerValue, setInnerValue] = React.useState<CascaderOptionValue[]>(
    value ?? [],
  );
  useEffect(() => {
    setInnerValue(value ?? []);
  }, [value]);
  const menu = (option: CascaderOptionType<T>[], level: number) => {
    const menu = (
      <div className="cascader-menu">
        {option.map((item: CascaderOptionType<T>) => {
          return (
            <Fragment key={item[activeField]}>
              {renderMenuItem(
                item as CascaderOptionType<T> & T,
                () => {
                  let nextValue = [...innerValue];
                  nextValue[level] = item[activeField];
                  nextValue = nextValue.slice(0, level + 1);
                  if (value === undefined) {
                    setInnerValue(nextValue);
                  }
                  onSelect?.(nextValue);
                },
                item[activeField] === innerValue[level],
                level,
              )}
            </Fragment>
          );
        })}
      </div>
    );
    return <Fragment key={level}>{renderMenu(menu, level)}</Fragment>;
  };
  const renderCascadeList = useMemo(() => {
    let childrenOptions: CascaderOptionType<T>[] = options;
    const cascadeList: React.ReactNode[] = [];
    let level = 0;
    for (let item of innerValue) {
      level++;
      const option = childrenOptions.find(
        (option) => option[activeField] === item,
      );
      childrenOptions = option?.children as (CascaderOptionType<T> & T)[];
      if (!childrenOptions) {
        break;
      }
      cascadeList.push(menu(childrenOptions, level));
    }
    return cascadeList;
  }, [options, innerValue, menu, activeField]);
  return (
    <FlexDiv className="cascader">
      {menu(options, 0)}
      {renderCascadeList}
    </FlexDiv>
  );
}
export default Cascader;
