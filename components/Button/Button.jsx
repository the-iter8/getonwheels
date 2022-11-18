import React from 'react';
import styles from './Button.module.css';
import Text from '../Text/Text';

export default function Button(props) {
  const { children, icon, id, outlined, fontSize, size, fullWidth } = props;
  const padding = size == 'large' ? '1em 2em' : '0.6em 1.2em';

  return (
    <button
      id={id}
      style={{ padding: padding }}
      className={`${styles.btn} 
        ${(outlined && styles.outlined) || ''} 
        ${(fullWidth && styles.fullWidth) || ''}`}
    >
      {icon}
      <Text size={fontSize}>{children}</Text>
    </button>
  );
}
