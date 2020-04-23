// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => <Input onChange={action('changed')} value={text('value', 'wow')} />;
