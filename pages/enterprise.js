import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Button from '../components/base/forms/Button';
import data from '../common/utils/_data';
import { Google } from '../project/auth';

class Delay extends React.Component {
    static displayName = 'Delay';

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ visible: true });
        }, 100);
    }

    render() {
        // const { props } = this;
        return this.state.visible ? this.props.children : (
            <div className="loading"/>
        );
    }
}

const EnterprisePage = class extends React.Component {
    static displayName = 'EnterprisePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.HOME);
        if (Project.gaAPIKey) {
            Google.init(Project.gaAPIKey, Project.gaClientId);
        }
        this.checkSignup();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.checkSignup();
    }

    checkSignup = () => {
        if (!this.signup) {
            const isSignup = document.location.href.includes('?signup');
            if (isSignup) {
                this.signup = true;
                setTimeout(() => {
                    Utils.scrollToSignUp();
                }, 200);
            }
        }
    };

    google = () => {
        API.trackEvent(Constants.events.REGISTER_GOOGLE);
        Google.login().then((res) => {
            if (res) {
                document.location = `https://app.flagsmith.com/oauth/google?code=${res}`;
            }
        });
    }

    register = (details) => {
        const { email, password, first_name, last_name, organisation_name = 'Default Organisation' } = details;
        this.setState({ isSaving: true });
        const referrer = API.getReferrer();
        let query = '';
        if (referrer) {
            query = `${Utils.toParam(Utils.fromParam())}`;
        }

        data.post(`${Project.api}auth/users/`, {
            email,
            password,
            first_name,
            last_name,
            query,
        })
            .then((res) => {
                API.setEvent(JSON.stringify({ tag: 'registrations', event: `User register${email} ${first_name} ${last_name}` }));
                API.trackEvent(Constants.events.REGISTER);
                API.setStoredToken(res.key);
                document.location = Project.appUrl + query;
            })
            .catch((error) => {
                this.setState({ error, isSaving: false });
            });
    };

    render = () => {
        const { email, password, organisation_name, first_name, last_name, error, isLoading, isSaving } = this.state;
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
                                                <Button className="d-block mt-4">
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
                        <div className="companies">
                            <div className="container">
                                <div className="text-center margin-auto col-md-12 text-center">
                                    <p>Trusted by top development teams.</p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/static/images/companies/aer-lingus.svg" alt="Aer Lingus" title="Aer Lingus"/>
                                        </div>
                                        <div className="col-4">
                                            <img src="/static/images/companies/amway.svg" alt="Amway" title="Amway"/>
                                        </div>
                                        <div className="col-4">
                                            <img src="/static/images/companies/axis-communications.svg" alt="Axis Communications" title="Axis Communications"/>
                                        </div>
                                        <div className="col-4">
                                            <img src="/static/images/companies/capita.svg" alt="Capita" title="Capita"/>
                                        </div>
                                        <div className="col-4">
                                            <img src="/static/images/companies/cognizant.svg" alt="Cognizant" title="Cognizant"/>
                                        </div>
                                        <div className="col-4">
                                            <img
                                            className="pad" src="/static/images/companies/financial-times.svg" alt="Financial times"
                                            title="Financial times"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img src="/static/images/companies/nike.svg" alt="Nike" title="Nike"/>
                                        </div>
                                        <div className="col-4">
                                            <img
                                            className="pad" src="/static/images/companies/starbucks.svg" alt="Starbucks"
                                            title="Starbucks"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                            className="pad" src="/static/images/companies/the-home-depot.svg" alt="The Home Depot"
                                            title="The Home Depot"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
