import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import '../project/polyfill';
import Header from '../components/Header';
import Project from '../common/project';
import '../common/utils';
import API from '../project/api';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default MyApp
