// @flow

import React from 'react';
import logo from './logo.svg';
import './styles.scss';

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Brand;
