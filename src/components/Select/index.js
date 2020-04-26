/* eslint-disable react/jsx-props-no-spreading */
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
  error?: string,
  placeholder?: string,
  onChange?: (SyntheticInputEvent<HTMLSelectElement>) => void,
  value?: string,
  name?: string,
  className?: string,
}

const Select = ({
  options, error, placeholder, onChange, value, name, className, ...rest
}: SelectProps) => {
  return (
    <div className={cx('select', className)}>
      <div className="select__field">
        <select
          {...rest}
          className={cx('input__field', 'select__input', {
            select__input_empty_value: !value,
            input__field_error: error,
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
      {error && (
        <p className="input__error">{error}</p>
      )}
    </div>
  );
};

Select.defaultProps = {
  error: '',
  onChange: noop,
  value: '',
  name: '',
  placeholder: 'Select your option',
  className: '',
};

export default Select;
