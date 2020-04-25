/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

export type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  error?: boolean,
  name?: string,
  className?: string
}

const Input = ({
  value, placeholder, onChange, error, name, className, ...rest
}: InputProps) => {
  return (
    <input
      {...rest}
      name={name}
      className={cx('input', {
        input_error: error,
      }, className)}
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
  className: '',
};

export default Input;
