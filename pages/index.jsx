import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/home.module.css';
import Text from '../components/Text/Text';

import { UserContext } from '../pages/_app';
import Button from '../components/Button/Button';

export default function Home() {
  const { isMobile } = useContext(UserContext);
  return (
    <div className={styles.root}>
      <div className={styles.rootLeft}>
        <div className={styles.headings}>
          <Text color='white' size={isMobile ? 'sm' : 'lg'}>
            More horses, fewer seconds.
          </Text>
          <Text
            color='crusta'
            size={isMobile ? 'xxxl' : 'heading'}
            font='secondary'
            weight='semi-bold'
          >
            We'll Help you to keep on rollin'
          </Text>
          <Text color='white' size={isMobile ? 'sm' : 'lg'}>
            A one stop solution to all your car needs.
          </Text>
        </div>

        <div className={styles.btnSet}>
          <Link href='/services'>
            <Button fontSize='lg' outlined size={isMobile ? 'small' : 'large'}>
              Services
            </Button>
          </Link>

          <Link href='/contact'>
            <Button fontSize='lg' size='large'>
              Contact
            </Button>
          </Link>
        </div>
      </div>
      {!isMobile && (
        <div className={styles.rootRight}>
          <video autoPlay loop muted src='../Video.mp4' width={'100%'}></video>
        </div>
      )}
    </div>
  );
}
