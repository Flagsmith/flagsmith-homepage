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
import Button from '../components/base/forms/Button';


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
                    <link rel="icon" sizes="192x192" href="/static/icons-192.png"/>
                    <link rel="apple-touch-icon" href="/static/icons-192.png"/>
                    <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                    <meta name="theme-color" content="#1d2d3f"/>
                    <script type="text/javascript" src="/static/chromefix.js"/>
                </Head>
                <body>
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
