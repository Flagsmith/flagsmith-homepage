import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import BlogItem from './BlogItem';

export default class BlogList extends Component {
  static displayName = 'BlogItem';

  static propTypes = {};

  shouldComponentUpdate() {
      return false;
  }

  render() {
      const {
          props: {
              doc,
              posts,
              authors,
          },
      } = this;

      const title = RichText.asText(doc.data.title) ? RichText.asText(doc.data.title) : 'Untitled';

      return (
          <div className="blog">
              <Head>
                  <title>
                    Feature Flag Platform Blog - Flagsmith
                  </title>
                  <link rel="canonical" href="https://flagsmith.com/blog" />
              </Head>
              <div className="container mt-5">
                  <div className="home">
                      <div className="blog-avatar" style={{ backgroundImage: `url(${doc.data.image.url})` }} />
                      <h1 className="blog-title">{RichText.asText(doc.data.headline)}</h1>
                      <p className="blog-description">{RichText.asText(doc.data.description)}</p>
                  </div>

                  {posts.map(b => (
                      <BlogItem authors={authors} post={b}/>
                  ))}
              </div>
          </div>
      );
  }
}
