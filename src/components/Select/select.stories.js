// @flow

import React from 'react';
// import { action } from '@storybook/addon-actions';
import Select from '.';

export default {
  title: 'Select',
  component: Select,
};

const options = [
  { label: 'Please choose me', value: '0' },
  { label: 'Not me!', value: '1' },
];

export const Default = () => <Select options={options} />;
