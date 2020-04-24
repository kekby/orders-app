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
  ...rest
}: Props) => {
  return (
    <InputMask
      className="input"
      onChange={onChange}
      value={value}
      mask={mask}
    >
      {/* $FlowFixMe  */ }
      {() => <Input {...rest} />}
    </InputMask>
  );
};

export default MaskedInput;
