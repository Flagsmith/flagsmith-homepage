import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import '../project/polyfill';
import Header from '../components/Header';
import Project from '../common/project';
import '../common/utils';
import API from '../project/api';

const gtm = () => {
    if (typeof window !== 'undefined' && !document.location.origin.includes('localhost')) {
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({ 'gtm.start':
          new Date().getTime(),
            event: 'gtm.js' }); const f = d.getElementsByTagName(s)[0];
            const j = d.createElement(s); const dl = l != 'dataLayer' ? `&l=${l}` : ''; j.async = true; j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`; f.parentNode.insertBefore(j, f);
        }(window, document, 'script', 'dataLayer', Project.gtm));
    }
};

global.Project = {
  ...global.Project,
  ...projectOverrides, // environment.js
};

class MyApp extends App {
    componentWillMount() {
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
    }

    render() {
        const { Component } = this.props;
        return (
            <Container>
                <React.Fragment>
                    <Head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                        <meta
                          name="description"
                          content="Cloud or Self Hosted Feature Flags, Feature Toggles &amp; Remote Config in your Mobile, React, React Native, Java, Javascript &amp; Python projects."
                        />
                        <title>
              Feature Flags and Toggles for Continuous Integration - Bullet Train
                        </title>
                        <link rel="icon" sizes="192x192" href="/static/icons-192.png"/>
                        <link rel="apple-touch-icon" href="/static/icons-192.png"/>
                        <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                        <meta name="theme-color" content="#1d2d3f"/>
                        <script type="text/javascript" src="/static/chromefix.js"/>
                        <script>
                            {Project.gtm && (gtm(Project.gtm))}
                        </script>
                    </Head>
                    <Header className={this.props.router.route === '/' ? 'homepage' : ''}/>
                    <Component {...this.props}/>
                    <div id="confirm"/>
                    <div id="alert"/>
                    <div id="modal"/>
                    {
            E2E && (
            <React.Fragment>
                <div className="e2e" id="e2e-request"/>
                <div className="e2e" id="e2e-error"/>
            </React.Fragment>
            )
          }
                </React.Fragment>
                {Project.gtm && (
                <noscript>
                    <iframe
                      src={`https://www.googletagmanager.com/ns.html?id=${Project.gtm}`}
                      height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                )}
            </Container>
        );
    }
}

export default MyApp;
