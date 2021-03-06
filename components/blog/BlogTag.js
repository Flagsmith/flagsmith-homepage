// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Link from 'next/link';
import parseMarkdown from '../../common/parse-markdown';

export default class TheComponent extends Component {
  static displayName = 'BlogPost';

  static propTypes = {
      tag: propTypes.string.isRequired,
  };

  render() {
      return (
          <Link href={this.props.tag === 'podcast' ? '/podcast' : `/blog/tag/${encodeURIComponent(this.props.tag)}`}>
              <span className={`blog-tag ${this.props.tag.replace(/ /g, '_').toLowerCase()}`}>{
                this.props.tag === 'bullet-train' ? 'flagsmith' : this.props.tag
              }
              </span>
          </Link>
      );
  }
}
