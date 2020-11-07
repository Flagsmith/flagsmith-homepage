import Link from 'next/link';
import React from 'react';
import Button from './base/forms/Button';

const Hero = class extends React.Component {
    static displayName = 'Hero'

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
        this.interval = setInterval(this.toggleText, 3300);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
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

    render() {
        const value = this.state.values[this.state.index];
        return (
            <div className="hero-container">
                <div className="hero hero--homepage">
                    <div className="hero-inner pt-4">
                        <div className="container">
                            <h1 className="margin-bottom margin-top">Release features with confidence</h1>
                            <p className="">
                        Manage feature flags across web, mobile and
                        server side applications. Deliver true Continuous Integration. Get builds out faster.
                        Control who has access to new features.
                            </p>
                            <p className="">
                        Use our hosted API, deploy to your own private cloud, or run on-premise.
                            </p>
                            <div className="hero-cta mt-1">
                                <Button onClick={Utils.scrollToSignUp}>
                                    Get Started For Free
                                </Button>
                                <p className="text-small">No payment card required</p>
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
                    <div className="companies">
                        <div className="container">
                            <div className="text-center margin-auto col-md-12 text-center">
                                <h2>Trusted by top development teams</h2>
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
                    <div className="hero-example">
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
        );
    }
};

export default Hero;
