// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, Html, NextScript } from 'next/document';
import { PrismicScript } from '../prismic-configuration';
import '../project/api';
import API from '../project/api';
import { Container } from 'next/app';
import React from 'react';
import Project from '../common/project';
import Header from '../components/Header';

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

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
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
                <body>
                    <Header/>
                    <Main />
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
                    <NextScript />
                    <PrismicScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
