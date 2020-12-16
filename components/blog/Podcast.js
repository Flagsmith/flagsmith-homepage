// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import moment from 'moment/min/moment.min';
import BlogBody from './BlogBody';
import Mailerlite from '../Mailerlite';
import { linkResolver } from '../../prismic-configuration';
import { customLink } from '../../prismic-functions';

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

      const embed = document.getElementById('embed');
      if (embed) {
          const width = embed.clientWidth;
          const divider = 16 / 9;
          const height = width / divider;
          const html = this.props.post.data.embed_url.html;
          if (html) {
              embed.innerHTML = html
                  .replace(/width=".*?"/, `width="${width}"`)
                  .replace(/height=".*?"/, `height="${height}"`);
          }
      }
  }


  render() {
      const { props: { post } } = this;
      const title = `Interview with ${post.data.guest_name}: ${post.data.guest_job_title}, ${RichText.asText(post.data.company_name)}`;
      const image = post.data.banner && post.data.banner.url;
      const image2x = post.data.banner2x && post.data.banner2x.url;
      const image4x = post.data.banner4x && post.data.banner4x.url;
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
                        {title} - Feature Flag Platform Podcast - Flagsmith
                    </title>
                </Head>
                <Mailerlite/>
                <div className="author mb-5 mt-3">
                    <Row>
                        <img alt={author} className="avatar" src={avatar || '/static/images/default-avatar.svg'}/>
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

                <div className="mb-4">
                    <h1>
                        Interview with {post.data.guest_name}: {post.data.guest_job_title}, {RichText.asText(post.data.company_name)}
                    </h1>
                </div>

                {image && (
                <div className="text-center blog-image mb-5">
                    <img alt={title} srcSet={`${image} 1x, ${image2x} 2x, ${image4x} 4x`}/>
                </div>
                )}
                {post.data.audio_url && (
                  <div className="mb-4 audio">
                      <span>Listen now</span>
                      <audio ref="audio_tag" src={post.data.audio_url} controls/>
                  </div>
                )}
                <h2>Episode Overview</h2>

                <div className="mb-5 post-summary">
                    <RichText
                      render={post.data.summary}
                      linkResolver={linkResolver}
                      serializeHyperlink={customLink}
                    />
                </div>

                {post.data.embed_url && (
                <div className="text-center mb-4">
                    <div id="embed" />
                </div>
                )}

                <h2>Episode Transcript</h2>

                <BlogBody sections={post.data.body}/>
            </div>
            <div className="container">
                <div className="pb-3">
                    {!this.state.loading && (
                    <section id="isso-thread" />
                    )}
                </div>
                <div
                  className="ml-form-embed"
                  data-account="1275188:o7m4q4p7i7"
                  data-form="3175195:e5d1x5"
                />
            </div>

      </>
      );
  }
}
