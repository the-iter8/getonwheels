import '../styles/globals.css';
import '../styles/Text.css';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const UserContext = React.createContext();

export default function MyApp({ Component, pageProps }) {

  {
    /* Container should only be used for just the grid elements. */
  }
  const isMobile = useMediaQuery(`(max-width:1020px)`);

  return (
    <UserContext.Provider value={{ isMobile }}>
      <Navbar></Navbar>

      <Head>
        <title>Local</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </UserContext.Provider>
  );
}
