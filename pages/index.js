import React from 'react';
import Link from 'next/link';

import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ButtonWhite } from '../components/base/forms/Button';
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

const Guide = props => (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'column',
    }}
    >
        <div
          onClick={() => window.location = props.href} style={{
              cursor: 'pointer',
              color: 'white',
              width: 360,
              alignItems: 'center',
              height: 183,
              backgroundColor: '#1d2d3f',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
          }}
        >
            <Delay delay={500}>
                <img style={{ marginBottom: props.title ? 10 : 0 }} alt="Feature flags in JavaScript" src={props.image}/>
            </Delay>
            {props.title && (
            <h4 style={{ fontSize: 14 }}>
                {props.title}
            </h4>
            )}
        </div>
        <a style={{ color: '#1c2b3d', textAlign: 'center', display: 'block' }} href={props.href}>
            <strong>
                {props.description}
            </strong>
        </a>
    </div>
);


const HomePage = class extends React.Component {
  static displayName = 'HomePage';

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
              Utils.scrollToSignUp();
          }
      }
  };

  google = () => {
      API.trackEvent(Constants.events.REGISTER_GOOGLE);
      Google.login().then((res) => {
          if (res) {
              document.location = `https://app.bullet-train.io/oauth/google?code=${res}`;
          }
      });
  }

  register = (details) => {
      const { email, password, first_name, last_name, organisation_name = 'Default Organisation' } = details;
      this.setState({ isSaving: true });
      const referrer = API.getReferrer();
      let query = '';
      if (referrer) {
          query = `?${Utils.toParam(Utils.fromParam())}`;
      }
      data.post(`${Project.api}auth/users/`, {
          email,
          password,
          first_name,
          last_name,
      })
          .then((res) => {
              if (res && res.key) {
                  API.trackEvent(Constants.events.REGISTER);
                  API.setStoredToken(res.key);
                  document.location = Project.appUrl + query;
              }
          })
          .catch((error) => {
              this.setState({ error, isSaving: false });
          });
  };

  render = () => {
      const { email, password, organisation_name, first_name, last_name, error, isLoading, isSaving } = this.state;
      const redirect = ''; // todo: fixme
      return (
          <div className="homepage">

              <Head>
                  <title>
            Feature Flags and Toggles for Continuous Integration - Bullet Train
                  </title>
                  <link rel="canonical" href="https://bullet-train.io/"/>
              </Head>
              <Hero redirect={redirect}/>
              <div className="pt-5">
                  <div className="offset-md-3 col-md-6">
                      <h2 className="text-center">How can Bullet Train accelerate your development process? Here's how.</h2>
                  </div>

                  <div className="section--grey section--wave">
                      <div className="container">
                          <div className="flex-row mt-5 mb-5">
                              <div className="col-md-5">
                                  <h3><span className="text--green">1.</span> Create a new Feature Flag and Feature
                                      Branch</h3>
                                  <p>You've been tasked with building out a new feature for your product: showing a chat
                                      widget in your app and on your website for customers to get real-time support. Two
                                      tasks:
                                  </p>
                              </div>
                              <div className="col-md-6 offset-md-1">
                                  <img
                                      alt="Create a new Feature"
                                      srcSet="/static/images/workflow/workflow-1.png 1x, /static/images/workflow/workflow-1@2x.png 2x"
                                      src="/static/images/workflow/workflow-1.png"
                                      className="img-fluid img__shadow"
                                  />
                              </div>
                          </div>

                          <div className="flex-row mt-5 mb-5">
                              <div className="col-md-5">
                                  <img
                                      alt="Deploy the feature"
                                      srcSet="/static/images/workflow/workflow-2.png 1x, /static/images/workflow/workflow-2@2x.png 2x"
                                      src="/static/images/workflow/workflow-2.png"
                                      className="img-fluid img__shadow mb-5 mb-sm-0"
                                  />
                              </div>
                              <div className="col-md-6 offset-md-1">
                                  <h3><span className="text--green">2.</span> Deploy the feature behind the feature flag
                                  </h3>
                                  <p>Once you've tested your code locally, place it behind a feature flag and deploy
                                      your code straight to production.</p>
                              </div>
                          </div>

                          <div className="mt-5 mb-5 pt-5">
                              <div className="offset-md-3 col-md-6">
                                  <h3 className="text-center">
                                      <span className="text--green">3.</span> Enable the feature for your own account
                                  </h3>
                                  <p className="text-center">Your code is now live, but the chat widget is hidden to
                                      everybody. You can now test the widget using your own account. Select your own
                                      user within Bullet Train and override the flag for your account.
                                  </p>
                              </div>
                              <div className="d-flex justify-content-center">
                                  <img
                                      alt="Enable the feature"
                                      srcSet="/static/images/workflow/workflow-3.png 1x, /static/images/workflow/workflow-3@2x.png 2x"
                                      src="/static/images/workflow/workflow-3.png"
                                      className="img-fluid img__shadow"
                                  />
                              </div>
                              <p className="text-center mt-5 mb-5">The widget will now show up for your own account.
                                  It's still hidden for everybody else.</p>
                              <div className="d-flex justify-content-center">
                                  <img
                                      alt="Enable the feature"
                                      srcSet="/static/images/workflow/workflow-3.2.png 1x, /static/images/workflow/workflow-3.2@2x.png 2x"
                                      src="/static/images/workflow/workflow-3.2.png"
                                      className="img-fluid"
                                  />
                              </div>
                          </div>

                          <div className="flex-row mt-5 mb-5">
                              <div className="col-md-5">
                                  <h3><span className="text--green">4.</span> Bring in the rest of your team</h3>
                                  <p>We can now create a Segment that includes all your company team members, so they
                                      can test out the new widget and make sure all the integration points work nicely.
                                      Now we can override that flag for this segment of users.</p>
                                  <img
                                      alt="Bring in the rest of your team"
                                      srcSet="/static/images/workflow/workflow-4.1.png 1x, /static/images/workflow/workflow-4.1@2x.png 2x"
                                      src="/static/images/workflow/workflow-4.1.png"
                                      className="img-fluid img__shadow mt-5 mb-5 mb-sm-0"
                                  />
                              </div>
                              <div className="col-md-6 offset-md-1">
                                  <img
                                      alt="Create a new Feature"
                                      srcSet="/static/images/workflow/workflow-4.2.png 1x, /static/images/workflow/workflow-4.2@2x.png 2x"
                                      src="/static/images/workflow/workflow-4.2.png"
                                      className="img-fluid img__shadow"
                                  />
                              </div>
                          </div>

                          <div className="row mt-5 pt-5 mb-5">
                              <div className="col-md-4">
                                  <h3><span className="text--green">5.</span> Stage the rollout of feature to your
                                      entire userbase</h3>
                              </div>
                              <div className="col-md-4">
                                  <p>Once we're happy that everything is good to go, we have two options. We can either
                                      flick the switch on the flag, enabling it instantly throughout the app for all
                                      your users, or we can do a staged rollout. Lets do a staged rollout, so that we
                                      can be sure that there are no unexpected issues when deploying the feature to
                                      everyone.
                                  </p>
                              </div>
                              <div className="col-md-4">
                                  <p>We will update the segment, removing the emailAddress filter and replacing it with
                                      a % Split. Once this is Segment is updated, 5% of our user base will see the chat
                                      widget, and 95% won't. If we're happy that we aren't seeing any increase in error
                                      rates within the app, we can either up that percentage figure or deploy the
                                      feature entirely.
                                  </p>
                              </div>
                          </div>

                          <div className="d-flex justify-content-center">
                              <img
                                  alt="Enable the feature"
                                  srcSet="/static/images/workflow/workflow-5.png 1x, /static/images/workflow/workflow-5@2x.png 2x"
                                  src="/static/images/workflow/workflow-5.png"
                                  className="img-fluid img__shadow"
                              />
                          </div>

                          <div className="mt-5 mb-5 pt-5 pb-5">
                              <div className="offset-md-3 col-md-6">
                                  <h3 className="text-center">
                                      <span className="text--green">6.</span> Finish Up
                                  </h3>
                                  <p className="text-center">The chat widget has been live for a few weeks, and
                                      everything is working nicely. The team have decided that they want to keep the
                                      widget in the application, so we can now remove the feature flag entirely. We edit
                                      the code to remove the optional display of the widget, and delete the flag from
                                      Bullet Train.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="feature-container ">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4">
                              <h2>Manage features without deployments</h2>
                              <p>
                  Bullet Train combines the concepts of feature toggles with the flexibility of remote config. Rather
                  than just switching features on and off, you can configure them for individual segments, users and
                  development environments.
                              </p>
                          </div>
                          <div className="col-md-8 text-right">
                              <Delay>
                                  <img
                                    style={{ maxWidth: '100%' }} alt="Feature use cases"
                                    srcSet="/static/images/homepage-features-1x.png 1x, /static/images/homepage-features-2x.png 2x"
                                    src="/static/images/homepage-features-1x.png"
                                  />
                              </Delay>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="feature-container alt">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8">
                              <div className="text-left">
                                  <Delay>
                                      <img
                                        style={{ maxWidth: '100%' }} alt="User segmentation and ab testing"
                                        srcSet="/static/images/homepage-segments-1x.png 1x, /static/images/homepage-segments-2x.png 2x"
                                        src="/static/images/homepage-segments-1x.png"
                                      />
                                  </Delay>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <h2>Powerful user segmentation</h2>
                              <p>
                  Utilise our powerful rules engine to manage your features for the users you wish to target. You can
                  even use segments for <strong>staged rollouts</strong> or <strong>a/b testing</strong>.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="feature-container">
                  <div className="text-center tech margin-auto col-md-12 text-center">
                      <h2>We currently support these popular languages</h2>
                      <div style={{ justifyContent: 'center' }} className="row">
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/java/">
                                  <img src="/static/images/tech-logos/java.png" alt="Java" title="Java"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/javascript/">
                                  <img
                                    src="/static/images/tech-logos/javascript.png" alt="JavaScript"
                                    title="JavaScript Feature Flags"
                                  />
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/javascript/">
                                  <img src="/static/images/tech-logos/react.png" alt="React JS" title="React JS Feature Flags"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/node/">
                                  <img src="/static/images/tech-logos/node.png" alt="Node.js" title="Node.js Feature Flags"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/python/">
                                  <img
                                    src="/static/images/tech-logos/python.png" className="img-fluid" alt="Python Feature Flags"
                                    title="Python"
                                  />
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/ruby/">
                                  <img src="/static/images/tech-logos/ruby.png" alt="Ruby" title="Ruby Feature Flags"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/dotnet/">
                                  <img src="/static/images/tech-logos/dotnet.png" alt=".NET" title=".NET Feature Flags"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/java/">
                                  <img src="/static/images/tech-logos/android2x.png" alt="android" title="android Feature Flags"/>
                              </a>
                          </div>
                          <div className="col-md-1 col-sm-2 col-4">
                              <a href="https://docs.bullet-train.io/clients/ios/">
                                  <img src="/static/images/tech-logos/bt-IOS.png" alt="IOS" title="IOS Feature Flags"/>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="feature-container alt">
                  <div className="text-center text-center col-xl-4 offset-lg-4">
                      <h2>Fully Featured Platform</h2>
                  </div>
                  <div className="container">
                      <div className="mt-5 row">
                          <div className="col-xl-4 col-md-6 text-center">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-ios-switch mb-3"/>
                                  <h5 className="card__title">Feature Flag Management</h5>
                                  <p className="card__paragraph-text">
                    Ship features remotely across
                    multiple environments. Deliver true Continuous Integration.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/managing-features/"
                                  >
                    Feature flags
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-ios-options mb-3"/>
                                  <h5 className="card__title">Customise Features</h5>
                                  <p className="card__paragraph-text">
                                      {' '}
                    Change the behaviour,
                    appearance and configuration of your app without needing to
                    deploy.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/managing-features/"
                                  >
                    Remote config
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-ios-person mb-3"/>
                                  <h5 className="card__title">User Traits</h5>
                                  <p className="card__paragraph-text">
                    Store traits against your users
                    without modifying your back-end and target features specifically for them.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/managing-identities/#identity-traits"
                                  >
                    User Traits
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-md-contacts mb-3"/>
                                  <h5 className="card__title">Create User Segments</h5>
                                  <p className="card__paragraph-text">
                    Create detailed user segments
                    based on their traits, then target features based on the segment.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/managing-segments/"
                                  >
                    User Segments
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-ios-browsers mb-3"/>
                                  <h5 className="card__title">Staged Feature Rollouts</h5>
                                  <p className="card__paragraph-text">
                    Deploy features to 1% of your user base.
                    All good? Roll out to everybody.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/staged-feature-rollouts/"
                                  >
                    Staged Feature Rollouts
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                              <div className="card mb-3 card--feature">
                                  <span className="card__icon ion-md-done-all mb-3"/>
                                  <h5 className="card__title">Track Changes</h5>
                                  <p className="card__paragraph-text">
                    Audit changes &amp;
                    rollback any mistakes or issues.
                                  </p>
                                  <a
                                    className="card__link"
                                    href="https://docs.bullet-train.io/audit-logs/"
                                  >
                    Track Changes
                                      <span
                                        className="pl-2 ion-md-arrow-dropright"
                                      />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div style={{ padding: '1rem' }} className="feature-container">
                  <div className="container">
                      <div className="text-center">
                          <h2>Resources</h2>
                      </div>
                      <div className="row">
                          <div className="col-xl-4">
                              <Guide
                                href="https://www.youtube.com/watch?v=_lyNzKLZ8rc"
                                description="A tutorial on how to use Bullet Train using React Native."
                                image="/static/images/tech-logos/react.png"
                                title="React Feature Flags Guide"
                              />
                          </div>
                          <div className="col-xl-4">
                              <Guide
                                href="https://www.youtube.com/watch?v=GPkCLO0F-5g"
                                description="A quick introduction to Bullet Train."
                                image="/static/images/90seconds.jpg"
                              />
                          </div>
                          <div className="col-xl-4">
                              <Guide
                                href="https://www.youtube.com/watch?v=8cD-t7KKitU"
                                description="A tutorial on how to use Bullet Train using vanilla JavaScript."
                                image="/static/images/tech-logos/javascript.png"
                                title="JavaScript Feature Flags Guide"
                              />
                          </div>
                      </div>
                      <div className="text-center">
                          <a
                            style={{ color: '#1c2b3d', fontSize: 18 }}
                            href="https://www.youtube.com/channel/UCki7GZrOdZZcsV9rAIRchCw"
                          >
                View all
                          </a>
                      </div>
                  </div>
              </div>

              <div className="sign-up" id="sign-up">
                  <div>
                      <div className="card signup-form container animated fadeIn col-md-8 col-xl-8">
                          <form
                            id="form" name="form" onSubmit={(e) => {
                                Utils.preventDefault(e);
                                this.register({ email, password, organisation_name, first_name, last_name });
                            }}
                          >
                              <div className="form-intro text-center">
                                  <h3>It's free to get started.</h3>
                                  <p className="text-white">
                    We have a 100% free for life plan for smaller projects.
                                      {' '}
                                      <Link href="/pricing">
                                          <a>
                        Check out our Pricing.
                                          </a>
                                      </Link>
                                  </p>
                              </div>
                              {Project.gaAPIKey && (
                                <>
                                    <Row style={{ justifyContent: 'center' }}>
                                        <button
                                          type="button" key="google" className="btn btn__oauth btn__oauth--google"
                                          onClick={this.google}
                                        >
                                            <img src="/static/images/oauth/google.svg"/> Sign up with Google
                                        </button>
                                    </Row>

                                    <Row style={{ justifyContent: 'center' }}>
                                        <h4>
                                      Or
                                        </h4>
                                    </Row>
                                </>
                              )}

                              <fieldset id="details" className="col-lg-6 offset-lg-3">
                                  <InputGroup
                                    title="First Name"
                                    data-test="firstName"
                                    inputProps={{
                                        name: 'firstName',
                                        className: 'full-width',
                                        error: error && error.first_name,
                                    }}
                                    onChange={(e) => {
                                        this.setState({ first_name: Utils.safeParseEventValue(e) });
                                    }}
                                    className="input-default full-width"
                                    type="text"
                                    name="firstName" id="firstName"
                                  />
                                  <InputGroup
                                    title="Last Name"
                                    data-test="lastName"
                                    inputProps={{
                                        name: 'lastName',
                                        className: 'full-width',
                                        error: error && error.last_name,
                                    }}
                                    onChange={(e) => {
                                        this.setState({ last_name: Utils.safeParseEventValue(e) });
                                    }}
                                    className="input-default full-width"
                                    type="text"
                                    name="lastName" id="lastName"
                                  />
                                  <InputGroup
                                    title="Email address"
                                    data-test="email"
                                    inputProps={{
                                        name: 'email',
                                        className: 'full-width',
                                        error: error && error.email,
                                    }}
                                    onChange={(e) => {
                                        this.setState({ email: Utils.safeParseEventValue(e) });
                                    }}
                                    className="input-default full-width"
                                    type="text"
                                    name="email"
                                    id="email"
                                  />
                                  <InputGroup
                                    title="Password"
                                    data-test="password"
                                    inputProps={{
                                        name: 'password',
                                        className: 'full-width',
                                        error: error && error.password1,
                                    }}
                                    onChange={(e) => {
                                        this.setState({ password: Utils.safeParseEventValue(e) });
                                    }}
                                    className="input-default full-width"
                                    type="password"
                                    name="password"
                                    id="password"
                                  />

                                  {error
                  && (
                  <FormGroup>
                      <div id="error-alert" className="alert alert-danger">
                        Please check your details and try again
                      </div>
                  </FormGroup>
                  )
                  }

                                  <div className="form-cta margin-top">

                                      <ButtonWhite
                                        data-test="signup-btn"
                                        name="signup-btn"
                                        disabled={isLoading || isSaving}
                                        className="full-width mb-3"
                                        type="submit"
                                      >
                      Sign Up
                                      </ButtonWhite>
                                      <a href={`${Project.appUrl}/login`} id="existing-member-btn">
                      Already a member?
                                      </a>
                                  </div>
                              </fieldset>
                          </form>
                      </div>
                  </div>
              </div>

              <Footer className="homepage"/>
          </div>
      );
  };
};

export default HomePage;
