// @flow

import React from 'react';
import cx from 'classnames';
import './styles.scss';

type Props = {
  children: React$Node,
  active: boolean
}

const Muted = ({
  children,
  active,
}: Props) => {
  return (
    <div
      className={cx({
        muted: active,
      })}
    >
      {children}
    </div>
  );
};

export default Muted;
