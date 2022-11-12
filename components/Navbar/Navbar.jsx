import React, { useContext } from 'react';
import { UserContext } from '../../pages/_app';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/Logo.png';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Hamburger from '../Hamburger/Hamburger';
export default function Navbar() {
  const { isMobile } = useContext(UserContext);
  const options = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  function NavBarPc() {
    return (
      <>
        {options.map((item) => {
          return (
            <Link key={item.name} href={item.link}>
              <Button fontSize='md'>{item.name}</Button>
            </Link>
          );
        })}
        {/* To add whatsapp open Link */}
        <Button fontSize='md' icon={<WhatsAppIcon />}>
          Whatsapp
        </Button>
      </>
    );
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image alt='Logo' src={Logo} height={60}></Image>
      </div>
      <div className={styles.navbarRight}>
        {!isMobile ? (
          <NavBarPc></NavBarPc>
        ) : (
          <Hamburger options={options}></Hamburger>
        )}
      </div>
    </div>
  );
}
