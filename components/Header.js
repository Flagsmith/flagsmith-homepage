import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Button from './base/forms/Button';
// import propTypes from 'prop-types';

class Header extends PureComponent {
  static displayName = 'Header';

  static propTypes = {};

  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
      const els = document.getElementsByClassName('nav-link');
      for (let i = 0; i < els.length; i++) {
          els[i].addEventListener('mouseleave', () => {
              for (let x = 0; x < els.length; x++) {
                  els[x].classList.remove('nav-faint');
              }
          });
          els[i].addEventListener('mouseover', function () {
              for (let x = 0; x < els.length; x++) {
                  els[x].classList.add('nav-faint');
              }
              this.classList.remove('nav-faint');
          });
      }
  }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    render() {
        const addedClass = this.state.menuOpen ? 'd-block' : ' d-none ';

        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link
                      href="/"
                    >
                        <a className="nav-link navbar-brand">
                            <img
                              title="Flagsmith" height={54}
                              src="/static/images/nav-logo.svg"
                              className="brand " alt="Flagsmith logo"
                            />
                        </a>
                    </Link>
                    <button
                      onClick={() => {
                          debugger
                          this.setState({ showNav: !this.state.showNav })
                      }}
                      className="navbar-toggler" type="button" data-toggle="collapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                        <img width={32} src="/static/images/menu.svg"/>
                    </button>

                    <div className={`collapse navbar-collapse${this.state.showNav ? ' show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" />
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link prefetch={false} href="/pricing"><a className="nav-link">Pricing</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link prefetch={false} href="https://docs.flagsmith.com/"><a className="nav-link">Docs</a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="noopener noreferrer" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <Link prefetch={false} href="/open-source"><a className="nav-link">Open Source</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link prefetch={false} href={`${Project.appUrl}/login`}><a className="nav-link">Log in</a></Link>
                            </li>
                            <li className="nav-item active">
                                <Link prefetch={false} href="/?signup">
                                    <a className="nav-link">
                                        <span className="nav-link-featured">
                                            Try it Free
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
