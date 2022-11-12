import React from 'react';
import Link from 'next/link';

import styles from './Hamburger.module.css';
import Text from '../Text/Text';

export default function Hamburger(props) {
  const { options } = props;
  return (
    <>
      <input id={styles.menuToggle} type='checkbox' />
      <label className={styles.menuBtn} htmlFor ={styles.menuToggle}>
        <span></span>
      </label>
      <ul className={styles.menuBox}>
        <li>
          {options.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <Text variant='p' className={styles.menuItem}>
                  {item.name}
                </Text>
              </Link>
            );
          })}
        </li>
      </ul>
    </>
  );
}
