import React from 'react';
import styles from './Button.module.css';
import Text from '../Text/Text';

export default function Button(props) {
  const { children, icon, id } = props;

  return (
    <button id={id} className={styles.btn}>
      {icon}
      <Text color='crusta'>{children}</Text>
    </button>
  );
}
