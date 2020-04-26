// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import MaskedInput from '.';

export default {
  title: 'MaskedInput',
  component: MaskedInput,
};

const mask = '+7 (999) 999-99-99';

export const Default = () => <MaskedInput mask={mask} onChange={action('changed')} value={text('value', 'idle')} />;
export const WithPlaceholder = () => <MaskedInput mask={mask} placeholder="I'm placeholder" onChange={action('changed')} value="" />;
export const ErrorState = () => <MaskedInput mask={mask} error="some error" placeholder="City" onChange={action('changed')} value="123123" />;
