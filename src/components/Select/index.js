// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

type Option = {|
  label: string,
  value: string
|}

type SelectProps = {
  options: Option[],
  error?: boolean
}

const Select = ({ options, error }: SelectProps) => {
  return (
    <select className={cx('select', {
      select_error: error,
    })}
    >
      {options.map((o) => <option value={o.value}>{o.label}</option>)}
    </select>
  );
};

Select.defaultProps = {
  error: false,
};

export default Select;
