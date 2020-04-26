/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

export type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  error?: string,
  name?: string,
  className?: string,
}

const Input = ({
  value, placeholder, onChange, error, name, className, ...rest
}: InputProps) => {
  return (
    <div className="input">
      <input
        {...rest}
        name={name}
        className={cx('input__field', {
          input__field_error: !!error,
        }, className)}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && (
        <p className="input__error">{error}</p>
      )}
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  error: '',
  name: '',
  className: '',
};

export default Input;
