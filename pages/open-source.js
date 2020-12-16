import React, { Component } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Tabs from '../components/base/forms/Tabs';
import TabItem from '../components/base/forms/TabItem';

export default class OpenSource extends Component {
    static displayName = 'OpenSourcePage'

    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: 0,
        };
    }

    componentDidMount() {
        API.trackPage(Constants.pages.OPEN_SOURCE);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>
                    Feature Flag Platform Open Source Projects - Flagsmith
                    </title>
                    <link rel="canonical" href="https://flagsmith.com/open-source" />
                </Head>
                <div className="pt-5 hero__open-source text-center">
                    <h1 className="text-center margin-bottom">Open Source</h1>
                    <p className="pb-3">
                        Flagsmith is 100% Open Source Software.
                        We welcome pull requests!
                    </p>
                </div>

                <div className="container">

                    <Tabs
                      className="pill" value={this.state.tab}
                      onChange={tab => this.setState({ tab })}
                    >
                        <TabItem
                          id="btn-select-flags"
                          value="Platform"
                          tabLabel={(
                              <Row className="row-center">
                                    Platform
                              </Row>
                            )}
                        >
                            <div className="mb-5">
                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-api" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>api</h2>
                                            <p className="m-0">
Python REST API for Flagsmith.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--python"/>
                                            <small className="technology-name">Python</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-frontend" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>frontend</h2>
                                            <p className="m-0">
                                              The admininstration interface for Flagsmith.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>

                                <a className="open-source-card" href="https://github.com/Flagsmith/flagsmith-docker">
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>flagsmith-docker</h2>
                                            <p className="m-0">
Docker Compose file to run the entire Flagsmith stack locally.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">Docker</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-docs" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>flagsmith-docs</h2>
                                            <p className="m-0">
This is the documentation repository for the Docs of Flagsmith.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </TabItem>

                        <TabItem
                          value="Client"
                          id="btn-select-remote-config" tabLabel={(
                              <Row className="row-center">
                                SDK Client Libraries
                              </Row>
                        )}
                        >
                            <div className="mb-5">
                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-js-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>js-client</h2>
                                            <p className="m-0">
                                              Javascript client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>
                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-js-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>react-native-client</h2>
                                            <p className="m-0">
                                              React Native client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>
                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-nodejs-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>nodejs-client</h2>
                                            <p className="m-0">
Node.js client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-dotnet-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>dotnet-client</h2>
                                            <p className="m-0">
.NET Standard client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--c"/>
                                            <small className="technology-name">C#</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-ruby-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>ruby-client</h2>
                                            <p className="m-0">
Ruby client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--ruby"/>
                                            <small className="technology-name">Ruby</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-python-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>python-client</h2>
                                            <p className="m-0">
Python client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--python"/>
                                            <small className="technology-name">Python</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-java-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>java-client</h2>
                                            <p className="m-0">
Java/Android client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">Java</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-ios-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>ios-client</h2>
                                            <p className="m-0">
iOS/Swift client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">iOS/Swift</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-php-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>php-client</h2>
                                            <p className="m-0">
PHP client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">PHP</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-go-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>go-client</h2>
                                            <p className="m-0">
Go client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">Go</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-rust-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>rust-client</h2>
                                            <p className="m-0">
Rust client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">Rust</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/Flagsmith/flagsmith-flutter-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>flutter-client</h2>
                                            <p className="m-0">
Flutter client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">Flutter</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </TabItem>
                    </Tabs>

                </div>
                <Footer className="homepage"/>
            </div>
        );
    }
}
