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
                    a: 'bulletTrain.hasFeature(',
                    b: "'show_coupon'",
                    c: ')',
                },
                {
                    a: 'bulletTrain.getTrait(',
                    b: "'accepted-term'",
                    c: ')',
                },
                {
                    a: 'bulletTrain.getTrait(',
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
                    <div className="hero-inner">
                        <div className="container">
                        <h1 className="margin-bottom margin-top">Release features with confidence</h1>
                        <p className="">
                        Manage feature flags across web, mobile and
                        server side applications. Deliver true Continuous Integration. Get builds out faster.
                        Control who has access to new features.
                        </p>
                        <div className="hero-cta mt-1">
                            <Button onClick={Utils.scrollToSignUp}>
                                {/* <Link href={`/${this.props.redirect}#sign-up`}> */}
                            Sign up Now
                                {/* </Link> */}
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
                        <defs>
                            <filter
                              x="-50%"
                              y="-50%"
                              width="200%"
                              height="200%"
                              filterUnits="objectBoundingBox"
                              id="prefix__a"
                            >
                                <feOffset dy={-4} in="SourceAlpha" result="shadowOffsetOuter1" />
                                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                <feColorMatrix
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.056 0"
                                  in="shadowBlurOuter1"
                                  result="shadowMatrixOuter1"
                                />
                                <feMerge>
                                    <feMergeNode in="shadowMatrixOuter1" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                          d="M0 204c.005-.003 356.003-176 720-100 364 76 720-100 720-100H0v200V4h1440v200H0z"
                          fill="#F9F9F9"
                          filter="url(#prefix__a)"
                        />
                    </svg>
                    <div className="companies">
                        <div className="container">
                            <div className="text-center margin-auto col-md-12 text-center">
                                <h2>Trusted by top development teams</h2>
                                <div className="row">
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/aer-lingus.svg" alt="Aer Lingus" title="Aer Lingus"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/amway.svg" alt="Amway" title="Amway"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/axis-communications.svg" alt="Axis Communications" title="Axis Communications"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/capita.svg" alt="Capita" title="Capita"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/cognizant.svg" alt="Cognizant" title="Cognizant"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img
                                          className="pad" src="/static/images/companies/financial-times.svg" alt="Financial times"
                                          title="Financial times"
                                        />
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img src="/static/images/companies/nike.svg" alt="Nike" title="Nike"/>
                                    </div>
                                    <div className="col-md-2 col-4">
                                        <img
                                          className="pad" src="/static/images/companies/starbucks.svg" alt="Starbucks"
                                          title="Starbucks"
                                        />
                                    </div>
                                    <div className="col-md-2 col-4">
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
