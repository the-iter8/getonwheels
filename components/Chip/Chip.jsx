import React from 'react';
import styles from './Chip.module.css';
import Text from '../Text/Text';
// Send Text component as a children in it.

export default function Button(props) {
  const { children, className } = props;

  return <div className={`${styles.chipRoot} ${className}`}>{children}</div>;
}
