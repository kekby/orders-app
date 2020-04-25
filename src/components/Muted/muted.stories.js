// @flow

import React from 'react';
import Muted from '.';

export default {
  title: 'Muted',
  component: Muted,
};

export const Active = () => (
  <Muted active>Muted disable all its content from any interaction</Muted>
);
export const Disabled = () => <Muted active={false}>Can&apos;t click me?</Muted>;
