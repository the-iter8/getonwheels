import React, { useContext } from 'react';
import { UserContext } from './_app';

import Link from 'next/link';
import Chip from '../components/Chip/Chip';
import Image from 'next/image';
import Text from '../components/Text/Text';
import { Container, Row, Col } from 'react-grid-system';

import img from '../public/cardimg.jpg';
import styles from '../styles/Services.module.css';

export default function Services() {
  const { isMobile } = useContext(UserContext);
  function Card() {
    return (
      <div className={styles.cardRoot}>
        <Image src={img} className={styles.cardImage}></Image>
        <div className={styles.cardTexts}>
          <Text size='md' weight='semi-bold' font='secondary'>
            General Service
          </Text>
          <Text size='xs' weight='medium' font='secondary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            facere nihil iste fugiat, aut molestiae quasi, vero fuga labore
            consequatur aliquam sed voluptatem eveniet atque, eos praesentium!
            Voluptas, quisquam aspernatur.
          </Text>

          <Link href='/contact' className={styles.quoteChip}>
            <Chip>
              <Text size='xs' color='crusta' font='secondary'>
                Get a quote
              </Text>
            </Chip>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.servicesRoot}>
      <div className={styles.servicesUpper}>
        <Text
          size={isMobile ? 'xxxl' : 'huge'}
          weight='bold'
          font='secondary'
          align='left'
        >
          Our Services
        </Text>
        <Text size='sm' weight='semi-bold'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          ullam?
        </Text>
        <Text size='sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel
          inventore sed. Sed laudantium illum, quaerat sapiente ad facere quidem
          officia eum omnis debitis, quae nemo alias beatae commodi. Placeat
          fugiat blanditiis vel, itaque nemo, inventore ratione neque laborum
          nisi tempora est illo voluptate amet.
        </Text>
      </div>
      <Container>
        <Row gutterWidth={70}>
          <Col sm={12} md={6} lg={4}>
            <Card />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
