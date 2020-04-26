/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import InputMask from 'react-input-mask';
import Input, { type InputProps } from '../Input';

type Props = {
  ...InputProps,
  mask: string,
}

const MaskedInput = ({
  mask,
  onChange,
  value,
  name,
  ...rest
}: Props) => {
  return (
    <InputMask
      {...rest}
      onChange={onChange}
      value={value}
      mask={mask}
      name={name}
    >
      {/* $FlowFixMe  */ }
      {(props) => <Input {...props} />}
    </InputMask>
  );
};

export default MaskedInput;
