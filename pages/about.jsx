import Image from 'next/image';
import Text from '../components/Text/Text';
import React, { useContext } from 'react';
import styles from '../styles/about.module.css';
import { UserContext } from '../pages/_app';
import { Container, Row, Col } from 'react-grid-system';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Logo from '../public/Brands/bosch.png';
import Castrol from '../public/Brands/castrol.png';
import Gainda from '../public/Brands/gainda.jpeg';
export default function AboutUs() {
  const { isMobile } = useContext(UserContext);
  function Brands() {
    function Item({ children }) {
      return <div className={styles.testimonialsItem}>{children}</div>;
    }
    return (
      <div className={styles.brandsRoot}>
        <Text
          size={isMobile ? 'xxxl' : 'huge'}
          font='secondary'
          weight='semi-bold'
          align='center'
        >
          Brands we use.
        </Text>

        <div>
          <Swiper
            // install Swiper modules
            navigation={isMobile ? false : true}
            pagination={{ clickable: true }}
            spaceBetween={2}
            slidesPerView={isMobile ? 1 : 4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Logo} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Castrol} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Logo} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Gainda} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Castrol} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Castrol} height={60} />
              </Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item>
                <Image alt='logo' src={Castrol} height={60} />
              </Item>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
  function About() {
    function Item() {
      return (
        <div className={styles.aboutItem}>
          <Text size='huge' weight='bold' color='dark-blue'>
            400+
          </Text>
          <Text size='sm' weight='bold'>
            Projects Completed.
          </Text>
          <Text size='xs' color='grey-white'>
            We've helped build over 400 amazing projects.
          </Text>
        </div>
      );
    }

    return (
      <div className={styles.aboutRoot}>
        <div className={styles.aboutTitles}>
          <div>
            <Text size='sm' color='crusta'>
              {' '}
              About Us
            </Text>
            <Text size='xxxl' weight='bold'>
              We do things differently...
            </Text>
          </div>
          <div>
            <Text size='md' weight='semi-bold' variant='a' href='/'>
              Learn More about the company and the team behind it.
            </Text>
          </div>
        </div>

        <Container>
          <Row gutterWidth={50}>
            <Col sm={12} md={6} lg={3} className={styles.column}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3} className={styles.column}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3} className={styles.column}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3} className={styles.column}>
              <Item></Item>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  function Story() {
    return (
      <div className={styles.storyRoot}>
        <div className={styles.storyTitles}>
          <Text size='sm' color='crusta'>
            Out Story
          </Text>
          <Text size='xxxl' weight='bold'>
            We are just getting started.
          </Text>
          <Text size='sm' color='grey-white' weight='semi-bold'>
            We've already helped over 4,000 companies achieve remarkable
            results.
          </Text>
        </div>

        <Container>
          <Row gutterWidth={50}>
            <Col md={12} lg={6} className={styles.column}>
              <Text size='sm' color='grey-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
                porro enim consequuntur fuga libero, dignissimos incidunt
                reprehenderit neque exercitationem officiis similique hic
                aspernatur minima quae iusto possimus voluptatum fugiat amet?
                Deleniti, ducimus culpa repellendus, id ipsa debitis recusandae
                quia eaque dolorem possimus tempore veniam nisi? Voluptatem
                dicta eum iusto.
              </Text>
              <Text size='sm' color='grey-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
                porro enim consequuntur fuga libero, dignissimos incidunt
                reprehenderit neque exercitationem officiis similique hic
                aspernatur minima quae iusto possimus voluptatum fugiat amet?
                Deleniti, ducimus culpa repellendus, id ipsa debitis recusandae
                quia eaque dolorem possimus tempore veniam nisi? Voluptatem
              </Text>
            </Col>
            <Col md={12} lg={6} className={styles.column}>
              <Text size='sm' color='grey-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
                porro enim consequuntur fuga libero, dignissimos incidunt
                reprehenderit neque exercitationem officiis similique hic
                aspernatur minima quae iusto possimus voluptatum fugiat amet?
                Deleniti, ducimus culpa repellendus, id ipsa debitis recusandae
                quia eaque dolorem possimus tempore veniam nisi? Voluptatem
                dicta eum iusto.
              </Text>
              <Text size='sm' color='grey-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
                porro enim consequuntur fuga libero, dignissimos incidunt
                reprehenderit neque exercitationem officiis similique hic
                aspernatur minima quae iusto possimus voluptatum fugiat amet?
                Deleniti, ducimus culpa repellendus, id ipsa debitis recusandae
                quia eaque dolorem possimus tempore veniam nisi? Voluptatem
              </Text>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <>
      <About></About>
      <Brands></Brands>
      <Story></Story>
    </>
  );
}
