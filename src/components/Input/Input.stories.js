// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Input from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => <Input onChange={action('changed')} value={text('value', 'idle')} />;
export const WithPlaceholder = () => <Input placeholder="I'm placeholder" onChange={action('changed')} value="" />;
export const ErrorState = () => <Input status="error" placeholder="City" onChange={action('changed')} value="with error" />;
