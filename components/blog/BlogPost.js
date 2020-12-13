// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import moment from 'moment/min/moment.min';
import BlogBody from './BlogBody';
import Mailerlite from '../Mailerlite'

export default class TheComponent extends Component {
  static displayName = 'BlogPost';

  constructor(props) {
      super(props);
      this.state = { loading: true };
  }

  componentDidMount() {
      const title = RichText.asText(this.props.post.data.title);
      API.trackPage(`Post - ${title}`);
      API.setReferrer(JSON.stringify({
          utm_source: 'flagsmith',
          utm_medium: 'blog',
          utm_campaign: title,
      }));
      this.setState({ loading: false });
  }

  render() {
      const { props: { post } } = this;
      const title = RichText.asText(post.data.title);
      const image = post.data.image && post.data.image.url;
      const description = RichText.asText(post.data.description);
      const dateFormatted = moment(post.data.date).format('MMM DD YYYY');
      const author = this.props.author ? this.props.author.data.name : 'Unknown';
      const avatar = this.props.author ? (this.props.author.data.avatar && this.props.author.data.avatar.url) || '' : '';
      return (
        <>
            <div className="container blog pt-5 pb-5">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <meta
                      name="description"
                      content="Manage your Feature Flags, Feature Toggles and Remote Config in your Mobile, React, React Native, Java, Javascript (Node) and Python projects."
                    />
                    <meta data-rh="true" property="og:site_name" content="Flagsmith"/>
                    <meta data-rh="true" property="og:type" content="article"/>
                    <meta data-rh="true" property="og:title" content={title}/>
                    <meta data-rh="true" property="og:description" content={description}/>
                    {image && (
                    <meta data-rh="true" property="og:image" content={image}/>
                    )}
                    <meta data-rh="true" name="description" content={description}/>
                    <meta data-rh="true" property="article:author" content={author}/>
                    <meta data-rh="true" name="author" content={author}/>
                    <meta data-rh="true" name="robots" content="index,follow"/>
                    <meta data-rh="true" property="article:published_time" content={dateFormatted}/>
                    {typeof window !== 'undefined' && Project.isso && (
                    <script
                      src="/static/comments.js"
                      data-isso-require-author="true"
                      data-isso={Project.isso}
                    />
                    )}
                    <title>
                        {title} - Feature Flag Platform Blog - Flagsmith
                    </title>
                </Head>
                <Mailerlite/>
                <h1>
                    {title}
                </h1>
                <div className="author mb-5 mt-3">
                    <Row>
                        <img alt={author} className="avatar" src={avatar || '/static/images/default-avatar'}/>
                        <div className="ml-2">
                            <div className="author">
                                {author}
                            </div>
                            <div className="date">
                                {dateFormatted}
                            </div>
                        </div>
                    </Row>
                </div>
                {image && <div className="text-center blog-image"><img src={image}/></div>}
                <BlogBody sections={post.data.body}/>
            </div>
            <div className="container pb-3">
                {!this.state.loading && (
                    <section id="isso-thread" />
                )}
            </div>
            <div class="ml-form-embed"
                data-account="1275188:o7m4q4p7i7"
                data-form="3175195:e5d1x5">
            </div>
      </>
      );
  }
}
