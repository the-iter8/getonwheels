import React, { useContext } from 'react';
// import { UserContext } from '../pages/_app';
import styles from './Footer.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Logo.png';

import Text from '../Text/Text';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Container, Row, Col } from 'react-grid-system';

export default function Footer() {
  const dataq = {
    product: [
      'Overview',
      'Features',
      'Solutions',
      'Tutorials',
      'Pricing',
      'Releases',
    ],
    company: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    resource: [
      'Blog',
      'Newsletter',
      'Events',
      'Help centre',
      'Tutorials',
      'Support',
    ],
    social: [
      'Twitter',
      'LinkedIn',
      'Facebook',
      'GitHub',
      'AngelList',
      'Dribbble',
    ],
  };

  function Column({ colName, items }) {
    console.log(items);
    return (
      <Col className={styles.column} xs={6} sm={6} lg={4}>
        <Text size='md'>{colName}</Text>
        {items.map((item) => {
          return (
            <Text size='sm' color='grey-white' variant='a' href='/services'>
              {item}
            </Text>
          );
        })}
      </Col>
    );
  }
  return (
    <div className={styles.footerUpper}>
      <div className={styles.footerUpperText}>
        <Image alt='logo' src={Logo} height={60} />
        <Text size='md'>
          Design amazing digital experiences that create more happy in the
          world.
        </Text>
        <div className={styles.footerUpperLogos}>
          <PinterestIcon fontSize='large'></PinterestIcon>
          <YouTubeIcon fontSize='large'></YouTubeIcon>
          <FacebookIcon fontSize='large'></FacebookIcon>
        </div>
      </div>
      <div>
        <Container>
          <Row gutterWidth={120}>
            <Column colName={'Product'} items={dataq.product}></Column>
            <Column colName={'Company'} items={dataq.company}></Column>
            <Column colName={'Resource'} items={dataq.resource}></Column>
          </Row>
        </Container>
      </div>
    </div>
  );
}
