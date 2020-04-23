// @flow

import React from 'react';

type InputProps = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <div className="input">
      <input placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
