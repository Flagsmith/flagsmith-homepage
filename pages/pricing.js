import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import PricingPanel from '../components/PricingPanel';
import Feedback from '../components/Feedback';
import Constants from '../common/utils/constants';

const PricingPage = class extends React.Component {
  static displayName = 'PricingPage'

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  componentWillMount() {
      API.trackPage(Constants.pages.PRICING);
  }

  feedback = () => {
      openModal('Feedback', <Feedback/>);
  }

  render = () => {
      // todo: fix
      const redirect = '';
      // const redirect = this.props.location.query.redirect ? `?redirect=${this.props.location.query.redirect}` : '';
      return (
          <div>
              <Head>
                  <title>
                  Feature Flag Platform Pricing - Flagsmith
                  </title>
                  <link rel="canonical" href="https://flagsmith.com/pricing" />
              </Head>
              <PricingPanel redirect={redirect}/>

              <div className="faq">
                  <div className="container">
                      <h2 className="text-center margin-bottom">FAQs</h2>
                      <div className="panel panel-default panel-grey">
                          <h4>So how does this all work?</h4>
                          <p className="answer">
                First off, you're free to host Flagsmith yourself, without charge. We're 100% open source,
                and totally fine with you doing that.
                          </p>
                          <p className="answer">
                If you want to support the project, or you don't fancy going through the hassle of
                managing that infrastructure yourself, we'd love you to sign up and use our hosted platform.
                          </p>
                          <p className="answer">
                The only metrics you need to consider when deciding on your plan is the number of API calls
                you plan on making, and the number of team members you have that need access to Flagsmith.
                You can create as many projects, environments, flags and segments as you like. We feel that this is
                the fairest measure of usage.
                          </p>
                      </div>
                      <div className="panel panel-default panel-grey">
                          <h4>How do you calculate API calls per month?</h4>
                          <p className="answer">
                This is simply the total number of API requests you make for each calendar month, across
                all the projects in your organisation.
                          </p>
                          <p className="answer">
                Each time you instantiate one of our client SDKs and get the flags for a user or
                application, you make 1 request.
                For example, if you have a single page React web application, you would generally make 1
                API request when the user loads your app, and then
                maintain that data for the duration of the user session. If your web pages were
                generated server-side, you would generally make 1 API request
                for each page view.
                          </p>
                          <p className="answer">
                We don't charge for every single API call. The following endpoints count against your monthly limit:
                          </p>
                          <ul className="answer">
                              <li>/flags</li>
                              <li>/identities</li>
                              <li>/traits</li>
                          </ul>
                      </div>
                      <div className="panel panel-default panel-grey">
                          <h4>What is a Team Member?</h4>
                          <p className="answer">
                Each Team Member can log in with their own email address. Audit logs record activities per
                logged in Team Member.
                          </p>
                      </div>
                      <div className="panel panel-default panel-grey">
                          <h4>What happens if I go over my plan limit?</h4>
                          <p className="answer">
                Don't worry; we'll carry on serving your flags to your users. We realise that this is
                important to your application.
                If this does happen, we'll be in touch to discuss upgrading you to a new plan.
                          </p>
                      </div>
                      <div className="panel panel-default panel-grey">
                          <h4>What about an annual discount?</h4>
                          <p className="answer">
                            If this sort of pricing is important to you - please
                              {' '}
                              <a style={{ color: '#22354a' }} href="mailto:support@flagsmith.com">get in touch</a>
                              {' '}
                          </p>
                      </div>
                      <div className="cta-container">
                          <h5>Didn't find an answer to your question? Get in touch</h5>
                          <div className="row">
                              <div className="col-md-6">
                                  <Feedback/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Footer className="homepage"/>
          </div>
      );
  }
};

export default PricingPage;
