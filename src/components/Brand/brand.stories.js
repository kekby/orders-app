// @flow

import React from 'react';
import Brand from '.';

export default {
  title: 'Brand',
  component: Brand,
};

export const Default = () => <Brand />;
export const Loading = () => <Brand isLoading />;
