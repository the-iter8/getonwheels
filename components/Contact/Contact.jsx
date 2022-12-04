import React, { useContext } from 'react';
import { UserContext } from '../../pages/_app';

import Text from '../Text/Text';
import Button from '../Button/Button';
import styles from './Contact.module.css';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'react-grid-system';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Contact() {
  const { isMobile } = useContext(UserContext);
  function ContactUpper() {
    return (
      <div className={styles.contactUpper}>
        <div className={styles.contactForm}>
          <div className={styles.titleContainer}>
            <Text
              size={isMobile ? 'xxxl' : 'huge'}
              weight='bold'
              font='secondary'
              align='left'
            >
              Contact Us
            </Text>
            <ConnectWithoutContactIcon
              sx={{ fontSize: 40 }}
            ></ConnectWithoutContactIcon>
          </div>
          <Text>Our team really loves you but we are not gay.</Text>
          <form action='' method='post' className={styles.column}>
            <div className={styles.row}>
              <TextField
                id='first-name'
                label='First Name'
                variant='outlined'
              />
              <TextField id='last-name' label='Last Name' variant='outlined' />
            </div>

            <div className={styles.column}>
              <TextField id='email' label='Email' variant='outlined' />
              <TextField id='phone' label='Phone No.' variant='outlined' />
              <TextField id='message' label='Your Message' multiline rows={4} />
              <Button fullWidth outlined size='large' fontSize='lg'>
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {!isMobile && (
          <div className={styles.contactMaps}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3397869701384!2d77.28895131052997!3d28.709389775521178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb108d6eee5f%3A0x89da9f6d48d76745!2sGet%20On%20Wheels!5e0!3m2!1sen!2sin!4v1668541259164!5m2!1sen!2sin'
              width='600'
              height='550'
              allowFullScreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              className={styles.googleMaps}
            ></iframe>
          </div>
        )}
      </div>
    );
  }
  function ContactLower() {
    function Item() {
      return (
        <div className={styles.itemRoot}>
          <div>
            <MarkUnreadChatAltIcon
              sx={{ fontSize: 40 }}
            ></MarkUnreadChatAltIcon>
          </div>
          <div className={styles.itemTitles}>
            <Text weight='semi-bold' size='lg' font='secondary'>
              Chat to blah
            </Text>
            <Text weight='light' size='sm' >
              Speak lmao?
            </Text>
            <Text variant='a' weight='light' size='sm'>
              lomamama@gmail.com
            </Text>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.contactLower}>
        <div>
          <Text
            size={isMobile ? 'xl' : 'xxl'}
            weight='bold'
            font='secondary'
            align='center'
          >
            Or... Contact us through -
          </Text>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Item></Item>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Item></Item>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.contactRoot}>
      <ContactUpper></ContactUpper>
      <ContactLower></ContactLower>
    </div>
  );
}
