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
              posts,
              authors,
          },
      } = this;

      return (
          <div className="blog">
              <div className="container mt-5">
                  {posts.map(b => (
                      <BlogItem key={b.id} authors={authors} post={b}/>
                  ))}
              </div>
          </div>
      );
  }
}
