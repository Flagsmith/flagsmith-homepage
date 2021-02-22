import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Button from '../components/base/forms/Button';
import Companies from '../components/Companies';


const DevopsPage = class extends React.Component {
    static displayName = 'DevopsPage';

    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            animating: true,
            values: [
                {
                    a: 'flagsmith.hasFeature(',
                    b: "'show_coupon'",
                    c: ')',
                },
                {
                    a: 'flagsmith.getTrait(',
                    b: "'accepted-term'",
                    c: ')',
                },
                {
                    a: 'flagsmith.getTrait(',
                    b: "'login_count'",
                    c: ')>3',
                },
            ],
        };
    }

    componentDidMount() {
        API.trackPage(Constants.pages.DEVOPS);
        this.interval = setInterval(this.toggleText, 3300);
    }

    toggleText = () => {
        this.setState({ animating: false });
        setTimeout(() => {
            if (this.interval) {
                const currentValue = this.state.index;
                const newIndex = currentValue + 1 >= this.state.values.length ? 0 : currentValue + 1;
                this.setState({ index: newIndex, animating: true });
            }
        }, 100);
    }


    render = () => {
        const value = this.state.values[this.state.index];
        return (
            <>
                <div className="homepage">

                    <Head>
                        <title>
                            DevOps, CI/CD, OpenSourceDeliver
                        </title>
                        <link rel="canonical" href="https://flagsmith.com/devops"/>
                    </Head>
                    <div className="hero-container">
                        <div className="hero hero--homepage">
                            <div className="hero-inner pt-4">
                                <div className="container">
                                    <h1 className="margin-bottom margin-top">Deliver Continuous Integration today</h1>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="pl-2 pr-4 enterprise-hero-text">
                                                <p className="w-full">
                                                Meet your CI/CD goals with the feature toggling and remote config
                                                service that is fastest to production. Setup and access via our API
                                                or our front end, and integrate with over a dozen client SDKs.
                                                </p>
                                                <Button className="d-block mt-5">
                                                    <a href="https://www.flagsmith.com/?signup">Start now</a>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <div className="hero-example hero-example--landing">
                                                <div className="card card--navy card--code">
                                                    <div className="card-body">
                                                        <span className={`code line-1${this.state.animating ? ' anim-typewriter' : ''}`}>
                                                            <span className="code code--green">if </span>
                                                            ({value.a}
                                                            <span className="code code--red">{value.b}</span>
                                                            <span className="code">
                                                                {value.c}
                                                            </span>
                                                        </span>
                                                        <span className="code anim-typewriter-after">)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg
                              width={1440}
                              height={204}
                              viewBox="0 0 1440 204"
                              className="homepage-wave"
                            >
                                <g clipPath="url(#prefix__clip0)">
                                    <path
                                      d="M0 206c.005-.003 354.003-149 718-73 364 76 722-27 722-27v100H0z"
                                      fill="#fff"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="prefix__clip0">
                                        <path fill="#fff" d="M0 0h1440v204H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="feature-container mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="enterprise-item">
                                        <h3 className="item-header">Manage features without deployments</h3>
                                        <div className="item-body">
                                            <p>Flagsmith combines the concepts of feature toggles with the
                                            flexibility of remote config. Rather than just switching
                                            features on and off, you can configure them for individual
                                            segments, users and development environments.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="enterprise-item">
                                        <h3 className="item-header">Open Source</h3>
                                        <div className="item-body">
                                            <p>Don’t let us just tell you about it. We’re open source,
                                            check it out yourself at <br/>
                                                <a className="item__link" href="https://github.com/Flagsmith​">https://github.com/Flagsmith</a>​.
                                            </p>
                                            <p>We love pull requests too!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="enterprise-item">
                                        <h3 className="item-header">Intelligent Integrations</h3>
                                        <div className="item-body">
                                            <p>Get more from Flagsmith by integrating with
                                            the tools you already use for customer data,
                                            monitoring, and data analysis.
                                            </p>
                                            <p>Flagsmith natively integrates with Segment,
                                            Datadog, Amplitude and more​.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero">
                        <Companies/>
                    </div>

                    <div className="feature-container alt">
                        <div className="text-center tech margin-auto col-md-12 text-center">
                            <h2>We currently support these popular languages</h2>
                            <div style={{ justifyContent: 'center' }} className="row">
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/java/">
                                        <img src="/static/images/tech-logos/java.png" alt="Java" title="Java"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/javascript/">
                                        <img
                                          src="/static/images/tech-logos/javascript.png" alt="JavaScript"
                                          title="JavaScript Feature Flags"
                                        />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/javascript/">
                                        <img src="/static/images/tech-logos/react.png" alt="React JS" title="React JS Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/node/">
                                        <img src="/static/images/tech-logos/node.png" alt="Node.js" title="Node.js Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/python/">
                                        <img
                                          src="/static/images/tech-logos/python.png" alt="Python Feature Flags"
                                          title="Python"
                                        />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/ruby/">
                                        <img src="/static/images/tech-logos/ruby.png" alt="Ruby" title="Ruby Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/dotnet/">
                                        <img src="/static/images/tech-logos/dotnet.png" alt=".NET" title=".NET Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/java/">
                                        <img src="/static/images/tech-logos/android2x.png" alt="android" title="android Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/ios/">
                                        <img src="/static/images/tech-logos/bt-IOS.png" alt="iOS" title="iOS Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/flutter/">
                                        <img src="/static/images/tech-logos/flutter.png" alt="Flutter" title="Flutter Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/php/">
                                        <img src="/static/images/tech-logos/php.png" alt="PHP" title="PHP Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/go/">
                                        <img src="/static/images/tech-logos/golang.png" alt="Go" title="Go Feature Flags"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://docs.flagsmith.com/clients/rust/">
                                        <img src="/static/images/tech-logos/rust.png" alt="Rust" title="Rust Feature Flags"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer className="homepage feature-container alt" pageType="landing"/>
                </div>

            </>
        );
    };
};

export default DevopsPage;
