// @flow

import React from 'react';
import cx from 'classnames';
import noop from 'lodash.noop';
import arrow from './arrow.png';
import './styles.scss';

type Option = {|
  label: string,
  value: string
|}

type SelectProps = {
  options: Option[],
  error?: boolean,
  placeholder?: string,
  onChange?: (SyntheticInputEvent<HTMLSelectElement>) => void,
  value?: string
}

const Select = ({
  options, error, placeholder, onChange, value,
}: SelectProps) => {
  return (
    <div className="select">
      <select
        className={cx('input', 'select__input', {
          select__input_empty: !value,
          input_error: error,
        })}
        onChange={onChange}
        value={value}
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
  placeholder: 'Select your option',
};

export default Select;
