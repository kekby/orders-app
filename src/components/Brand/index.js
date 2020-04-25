// @flow

import React from 'react';
import cx from 'classnames';
import logo from './logo.svg';
import Spinner from '../Spinner';
import './styles.scss';

type Props = {
  className?: string,
  isLoading?: boolean
}

const Brand = ({ className, isLoading }: Props) => {
  return (
    <div className={cx('brand', className)}>
      <div className="brand__logo">
        <img src={logo} alt="logo" />
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

Brand.defaultProps = {
  className: '',
  isLoading: false,
};

export default Brand;
