// @flow

import React from 'react';

type Option = {
  label: string,
  value: string
}

type SelectProps = {
  options: Option[]
}

const Select = ({ options }: SelectProps) => {
  return (
    <select>
      {options.map((o) => <option value={o.value}>{o.label}</option>)}
    </select>
  );
};

export default Select;
