// @flow

import React from 'react';
import cx from 'classnames';
import noop from 'lodash.noop';
import './styles.scss';

type Option = {|
  label: string,
  value: string
|}

type SelectProps = {
  options: Option[],
  error?: boolean,
  placeholder?: string,
  onChange?: (Option) => void,
  value?: string
}

const Select = ({
  options, error, placeholder, onChange, value,
}: SelectProps) => {
  return (
    <select
      className={cx('input', 'select', {
        input_error: error,
        select_empty_value: !value,
      })}
      onChange={onChange}
      value={value}
    >
      <option value="" disabled selected>{placeholder}</option>
      {options.map((o) => <option value={o.value}>{o.label}</option>)}
    </select>
  );
};

Select.defaultProps = {
  error: false,
  onChange: noop,
  value: '',
  placeholder: 'Select your option',
};

export default Select;
