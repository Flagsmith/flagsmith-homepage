import App, { Container } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import '../styles/styles.scss';
import '../project/polyfill';
import Header from '../components/Header';
import Project from '../common/project';
import '../common/utils';
import API from '../project/api';
import RebrandBanner from '../components/RebrandBanner';
import Crisp from '../components/Crisp'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = Utils.fromParam();
            if (params.utm_source) {
                const str = `${(params.utm_source || '')} ${(params.utm_campaign || '')} ${(params.utm_medium || '')}`;
                const cook = JSON.stringify({
                    utm_source: params.utm_source,
                    utm_medium: params.utm_medium,
                    utm_campaign: params.utm_campaign,
                    utm_content: params.utm_content,
                    utm_term: params.utm_term,
                });
                API.trackEvent(Constants.events.REFERRER(str));
                API.setReferrer(cook);
            }
        }
    }, []);
    return (
      <>
          <Header/>
          <Component {...pageProps} />
          <RebrandBanner/>
          <Crisp/>
      </>
    );
}


export default MyApp;
