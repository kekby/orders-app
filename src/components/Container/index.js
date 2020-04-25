/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

type Props = {
  children: React$Node,
  className?: string
}

const Container = ({ children, className, ...rest }: Props) => (
  <div {...rest} className={cx('container', className)}>
    {children}
  </div>
);

Container.defaultProps = {
  className: '',
};

export default Container;
