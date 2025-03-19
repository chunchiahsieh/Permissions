import React from 'react';

import styles from './ClearToken.module.css';

export interface ClearTokenProps {
  prop?: string;
}

export function ClearToken({prop = 'default value'}: ClearTokenProps) {
   localStorage.removeItem("token");
  return <div className={styles.ClearToken}>ClearToken {prop}</div>;
}
