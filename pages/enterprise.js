import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Button from '../components/base/forms/Button';
import { Google } from '../project/auth';
import Delay from '../components/Delay';
import { ContactForm } from '../components/PricingPanel';
import Companies from '../components/Companies';


const EnterprisePage = class extends React.Component {
    static displayName = 'EnterprisePage';

    componentDidMount() {
        API.trackPage(Constants.pages.ENTERPRISE);

    }


    render = () => {
        return (
            <>
                <div className="homepage">

                    <Head>
                        <title>
                        Data Sensitive, Enterprise, OpenShift, Kubernetes
                        </title>
                        <link rel="canonical" href="https://flagsmith.com/enterprise"/>
                    </Head>
                    <div className="hero-container">
                        <div className="hero hero--homepage">
                            <div className="hero-inner pt-4">
                                <div className="container">
                                    <h1 className="margin-bottom margin-top">Enterprise ready feature flags and remote config</h1>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="px-3 enterprise-hero-text">
                                                <p class="w-full">
                                                Use our hosted API, deploy to your own private cloud, or run on-premise. Flagsmith brings feature toggles,
                                                remote config and AB testing to the most demanding organizations.
                                                </p>
                                                <Button className="d-block mt-5">
                                                    <a href="https://www.flagsmith.com/?signup">Start now</a>
                                                </Button>
                                                <Button
                                                  onClick={() => openModal(
                                                    <h3>Contact Sales</h3>,
                                                    <ContactForm onComplete={() => {
                                                        closeModal();
                                                        this.goSignup();
                                                    }}
                                                    />,
                                                  )}
                                                  className="d-block mt-4">
                                                    Talk to sales
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <Delay>
                                                <img
                                                className="mt-5"
                                                style={{ maxWidth: '100%' }} alt="Feature use cases"
                                                srcSet="/static/images/homepage-features-1x.png 1x, /static/images/homepage-features-2x.png 2x"
                                                src="/static/images/homepage-features-1x.png"
                                                />
                                            </Delay>
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
                                        <h3 className="item-header">Run on-premises</h3>
                                        <div class="item-body">
                                            <p>If your organization demands complete control,
                                            Flagsmith is the only complete feature toggling and
                                            remote config solution that supports on premise
                                            installation.</p>
                                            <p>We support a variety of deployment options
                                            including Kubernetes, AWS, GCP and Docker​.</p>
                                        </div>
                                    </div>
                                    <div className="enterprise-item">
                                        <h3 className="item-header">Enterprise Integrations</h3>
                                        <div class="item-body">
                                            <p>Get more from Flagsmith by integrating with the
                                            tools you already use for customer data,
                                            monitoring, and data analysis.</p>
                                            <p>Flagsmith natively integrates with Segment,
                                            Datadog, Amplitude and more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="enterprise-item">
                                        <h3 className="item-header">Advanced Security Controls</h3>
                                        <div class="item-body">
                                            <p>Role Based Access Controls &gt; Flagsmith provides
                                            fine-grained permissions to help teams manage
                                            access and roles across projects and
                                            environments.</p>
                                            <p>Single Sign On &gt; Use Flagsmith with your SSO
                                            provider</p>
                                            <p>Audit Logs &gt; Every action taken within the
                                            Flagsmith administration application is tracked
                                            and logged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero">
                        <Companies/>
                    </div>

                    <div className="feature-container feature-container alt">
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

export default EnterprisePage;
