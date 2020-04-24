/* eslint-disable react/button-has-type */
// @flow

import React from 'react';
import noop from 'lodash.noop';
import cx from 'classnames';
import './styles.scss';

type ButtonProps = {
  children: React$Node,
  type?: "button" | "submit",
  onClick?: (string) => void,
  disabled?: boolean
}

const Button = ({
  children,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx('button')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: noop,
  disabled: false,
};

export default Button;
