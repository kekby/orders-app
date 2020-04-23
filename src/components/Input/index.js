// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  error?: boolean
}

const Input = ({
  value, placeholder, onChange, error,
}: InputProps) => {
  return (
    <input
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
};

export default Input;
