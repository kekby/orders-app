// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  status?: "idle" | "error"
}

const Input = ({
  value, placeholder, onChange, status,
}: InputProps) => {
  return (
    <input
      className={cx('input', `input_${status}`)}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  status: 'idle',
};

export default Input;
