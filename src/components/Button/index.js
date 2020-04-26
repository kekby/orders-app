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

const Button = React.forwardRef<ButtonProps, HTMLElement>(({
  children,
  type = 'button',
  onClick,
  disabled,
  className,
}: ButtonProps, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={cx('button', className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

// $FlowFixMe
Button.defaultProps = {
  type: 'button',
  onClick: noop,
  disabled: false,
  className: '',
};

export default Button;
