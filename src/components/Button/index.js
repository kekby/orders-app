/* eslint-disable react/button-has-type */
// @flow

import React from 'react';
import noop from 'lodash.noop';
import cx from 'classnames';
import './styles.scss';

type ButtonProps = {
  children: React$Node,
  type?: "button" | "submit",
  onClick?: () => void,
  disabled?: boolean,
  className?: string
}

const Button = ({
  children,
  type = 'button',
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx('button', className)}
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
  className: '',
};

export default Button;
