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
  const { breakpoints, windowSize } = useContext(UserContext);
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
            <Link href={item.link}>
              <Button>{item.name}</Button>
            </Link>
          );
        })}
        {/* To add whatsapp open Link */}
        <Button icon={<WhatsAppIcon />}>Whatsapp</Button>
      </>
    );
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image alt='Logo' src={Logo} height={60}></Image>
      </div>
      <div className={styles.navbarRight}>
        {windowSize > breakpoints.sm ? (
          <NavBarPc></NavBarPc>
        ) : (
          <Hamburger options={options}></Hamburger>
        )}
      </div>
    </div>
  );
}
