import React from 'react';
import Link from 'next/link';
import './Modal';
import Input from './base/forms/Input';
import InputGroup from './base/forms/InputGroup';
import data from '../common/utils/_data';

export class GeneralEnquiries extends React.Component {
    static displayName = 'TheComponent';

    static propTypes = {};

    state = {

    }

    submit = (e) => {
        Utils.preventDefault(e);
        this.setState({ isLoading: true });
        const { isLoading, ...rest } = this.state;
        data.post('https://post.formlyapp.com/bullet-train-general', { ...rest })
            .then(() => {
                this.setState({ isComplete: true });
                this.props.onComplete();
            }).catch(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        // const { props } = this;
        return this.state.isComplete ? (
            <div>
            Thank you for contacting us, a member of our team will get in touch within 24 hours.
            </div>
        ) : (
            <form onSubmit={this.submit}>
                <InputGroup
                  title="Email Address*"
                  inputProps={{
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ email: Utils.safeParseEventValue(e) })}
                />
                <InputGroup
                  title="How can we help?"
                  textarea
                  inputProps={{
                      style: { height: 100 },
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ message: Utils.safeParseEventValue(e) })}
                />
                <div className="text-right">
                    <Button type="submit" style={{ paddingLeft: 50, paddingRight: 50, fontSize: 18 }} disabled={this.state.isLoading || !Utils.isValidEmail(this.state.email)}>
                    Get in Touch
                    </Button>
                </div>

            </form>
        );
    }
}
export class ContactForm extends React.Component {
    static displayName = 'TheComponent';

    static propTypes = {};

    state = {

    }

    submit = (e) => {
        Utils.preventDefault(e);
        this.setState({ isLoading: true });
        const { isLoading, ...rest } = this.state;
        data.post('https://post.formlyapp.com/bullet-train-a6b7d1', { ...rest })
            .then(() => {
                this.setState({ isComplete: true });
                this.props.onComplete();
            }).catch(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        // const { props } = this;
        return this.state.isComplete ? (
            <div>
            Thank you for contacting us, a member of our sales team will get in touch within 24 hours.
            </div>
        ) : (
            <form onSubmit={this.submit}>
                <InputGroup
                  title="Email Address*"
                  inputProps={{
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ email: Utils.safeParseEventValue(e) })}
                />
                <InputGroup
                  title="Expected requests per month (optional)"
                  inputProps={{
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ callsPerMonth: Utils.safeParseEventValue(e) })}
                />
                <InputGroup
                  title="Number of team members (optional)"
                  inputProps={{
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ numberOfSeats: Utils.safeParseEventValue(e) })}
                />
                <InputGroup
                  title="How can we help?"
                  textarea
                  inputProps={{
                      style: { height: 100 },
                      className: 'full-width modal-input mb-2',
                  }}
                  onChange={e => this.setState({ message: Utils.safeParseEventValue(e) })}
                />
                <div className="text-right">
                    <Button type="submit" style={{ paddingLeft: 50, paddingRight: 50, fontSize: 18 }} disabled={this.state.isLoading || !Utils.isValidEmail(this.state.email)}>
                    Contact Sales
                    </Button>
                </div>

            </form>
        );
    }
}
const PricingPanel = class extends React.Component {
  static displayName = 'PricingPanel';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }


  render() {
      const { redirect } = this.props;

      return (
          <div className="pricing pt-5" id="pricing">
              <div className="container">
                  <h1 className="text-center margin-bottom">Start using Flagsmith for free</h1>
                  <p className="text-center">Then increase your plan as your business grows.</p>
                  <div className="col-md-12">
                      <div className="flex-row row-center">
                          <div className="col-md-6 col-lg-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Free</p>
                                      <img src="/static/images/growth.svg" alt="free icon" className="pricing-icon"/>
                                      <p className="pricing-type">Free</p>
                                      <p className="text-small text-center">more flags than the UN</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                        Try It Free
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                  Up to {' '}
                                                  <strong>20,000</strong>
                                                  {' '}
                          requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                  <strong>1</strong>
                                                  {' '}
                          Team Member
                                              </p>
                                          </li>
                                          <li><p>Unlimited Projects</p></li>
                                          <li><p>Unlimited Environments</p></li>
                                          <li><p>Unlimited Feature Flags</p></li>
                                          <li><p>Unlimited Identities and Segments</p></li>
                                          <li><p>Fine Grained User Permissions</p></li>
                                          <li><p>2-factor and SSO Authentication</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Start-Up</p>
                                      <img src="/static/images/startup.svg" alt="Startup icon" className="pricing-icon"/>
                                      <p className="pricing-type">$29</p>
                                      <p className="text-small text-center">billed monthly</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                          Try It Free
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Up to <strong>250,000</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Up to <strong>3</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>Unlimited Projects</p></li>
                                          <li><p>Unlimited Environments</p></li>
                                          <li><p>Unlimited Feature Flags</p></li>
                                          <li><p>Unlimited Identities and Segments</p></li>
                                          <li><p>Email Technical Support</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured">Most Popular</p>
                                      <p className="pricing-price">Scale-Up</p>
                                      <img src="/static/images/pricing-scale-up.svg" alt="Scale-up icon" className="pricing-icon"/>
                                      <p className="pricing-type">$99</p>
                                      <p className="text-small text-center">billed monthly</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                          Try It Free
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Up to <strong>2 million</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Up to <strong>10</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>All Startup Features</p></li>
                                          <li><p>Priority Email Technical Support</p></li>
                                      </ul>

                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Enterprise</p>
                                      <img src="/static/images/cubes.svg" alt="Enterprise icon" className="pricing-icon"/>
                                      <p className="pricing-type">Contact Us</p>
                                      <p className="text-small text-center">for enterprise pricing</p>
                                      <a
                                        onClick={() => openModal(
                                            <h3>Contact Sales</h3>,
                                            <ContactForm onComplete={() => closeModal()}/>,
                                        )} className="pricing-cta blue"
                                      >Contact Sales
                                      </a>
                                  </div>

                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Over <strong>2 million</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Over <strong>10</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>All Scale Up Features</p></li>
                                          <li><p>SAML authentication via Okta</p></li>
                                          <li><p>Uptime SLA</p></li>
                                          <li><p>Priority Email Technical Support with SLA</p></li>
                                          <li><p>Optional On Premise Installation</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
};

PricingPanel.propTypes = {};

export default PricingPanel;
