// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

export type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  error?: boolean,
  name?: string
}

const Input = ({
  value, placeholder, onChange, error, name,
}: InputProps) => {
  return (
    <input
      name={name}
      className={cx('input', {
        input_error: error,
      })}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  error: false,
  name: '',
};

export default Input;
