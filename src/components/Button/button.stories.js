// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button onClick={action('click')}>Click me</Button>;
export const Disabled = () => <Button disabled onClick={action('click')}>Click me</Button>;
