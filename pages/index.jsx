import React, { useContext } from 'react';
import { UserContext } from '../pages/_app';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import Contact from '../components/Contact/Contact';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-grid-system';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import RateReviewIcon from '@mui/icons-material/RateReview';
export default function Home() {
  const { isMobile } = useContext(UserContext);

  function Hr() {
    return <div className='Hr'></div>;
  }

  function Hero() {
    return (
      <div className={styles.heroRoot}>
        <div className={styles.heroRootLeft}>
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
              <Button
                fontSize='lg'
                outlined
                size={isMobile ? 'small' : 'large'}
              >
                Services
              </Button>
            </Link>

            <Link href='/contact'>
              <Button fontSize='lg' size={isMobile ? 'small' : 'large'}>
                Contact
              </Button>
            </Link>
          </div>
        </div>
        {!isMobile && (
          <div className={styles.heroVideoFrame}>
            <div className={styles.heroRootRight}>
              <video
                loop
                muted
                autoPlay
                src='../Video.mp4'
                width={'100%'}
                className={styles.video}
              ></video>
            </div>
          </div>
        )}
      </div>
    );
  }

  function Services() {
    function Item() {
      return (
        <div className={styles.itemRoot}>
          <div>
            <OilBarrelIcon sx={{ fontSize: 80 }}></OilBarrelIcon>
          </div>

          <div className={styles.itemTitles}>
            <Text weight='bold' size='lg' font='secondary'>
              Oil Change
            </Text>
            <Text weight='normal' size='xs'>
              Regulary Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ratione, omnis?
            </Text>
            <Text weight='medium' size='xs' variant='a' href='/services'>
              Learn more about oil change
            </Text>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.servicesRoot}>
        <div className={styles.titleContainer}>
          <Text
            size={isMobile ? 'xxxl' : 'huge'}
            font='secondary'
            weight='semi-bold'
            align='center'
          >
            Services
          </Text>
          <SettingsSuggestIcon sx={{ fontSize: 40 }}></SettingsSuggestIcon>
        </div>
        
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Item></Item>
            </Col>
          </Row>
        </Container>
        <Link href='/services'>
          <Button fontSize='lg' outlined>
            See all services.
          </Button>
        </Link>
      </div>
    );
  }

  function Testimonials() {
    function Item() {
      return (
        <div className={styles.testimonialsItem}>
          <Text size={isMobile ? 'lg' : 'xl'} align='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quisquam.
          </Text>
          <div className={styles.testimonialsTitles}>
            <Avatar alt='Remy Sharp' sx={{ width: 40, height: 40 }} />
            <Text size='sm' weight='semi-bold'>
              Kelly Ramchandani
            </Text>
            <Text size='xs' color='red-trans'>
              Product Manager
            </Text>
            <Rating name='size-small' value={3} readOnly />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.testimonialsRoot}>
        <div className={styles.titleContainer}>
          <Text
            size={isMobile ? 'xxxl' : 'huge'}
            font='secondary'
            weight='semi-bold'
            align='center'
          >
            Testimonials
          </Text>
          <RateReviewIcon sx={{ fontSize: 40 }}></RateReviewIcon>
        </div>
        <div>
          <Swiper
            // install Swiper modules
            navigation={isMobile ? false : true}
            pagination={{ clickable: true }}
            spaceBetween={2}
            slidesPerView={isMobile ? 1 : 3}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Item></Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item></Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item></Item>
            </SwiperSlide>
            <SwiperSlide>
              <Item></Item>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero></Hero>
      <Hr></Hr>

      <Services></Services>
      <Hr></Hr>

      <Testimonials></Testimonials>
      <Hr></Hr>

      <Contact></Contact>
    </>
  );
}

// Import Swiper styles
