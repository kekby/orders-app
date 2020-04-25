// @flow

import React from 'react';
import cx from 'classnames';
import logo from './logo.svg';
import './styles.scss';

type Props = {
  className?: string
}

const Brand = ({ className }: Props) => {
  return (
    <div className={cx('brand', className)}>
      <div className="brand__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

Brand.defaultProps = {
  className: '',
};

export default Brand;
