// @flow

import React from 'react';
import cx from 'classnames';
import noop from 'lodash.noop';
import arrow from './arrow.png';
import './styles.scss';

export type Option = {|
  label: string,
  value: string
|}

type SelectProps = {
  options: Option[],
  error?: boolean,
  placeholder?: string,
  onChange?: (SyntheticInputEvent<HTMLSelectElement>) => void,
  value?: string,
  name?: string,
  className?: string
}

const Select = ({
  options, error, placeholder, onChange, value, name, className,
}: SelectProps) => {
  return (
    <div className={cx('select', className)}>
      <select
        className={cx('input', 'select__input', {
          select__input_empty: !value,
          input_error: error,
        })}
        onChange={onChange}
        value={value}
        name={name}
      >
        <option value="" disabled default>{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <div className="select__arrow">
        <img src={arrow} alt="show options" />
      </div>
    </div>
  );
};

Select.defaultProps = {
  error: false,
  onChange: noop,
  value: '',
  name: '',
  placeholder: 'Select your option',
  className: '',
};

export default Select;
