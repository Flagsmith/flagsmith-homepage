import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment/min/moment.min';
import { RichText } from 'prismic-reactjs';
import _ from 'lodash';
import BlogTag from './BlogTag';
import { hrefResolver, linkResolver } from '../../prismic-configuration';

export default class BlogItem extends Component {
  static displayName = 'BlogItem';

  static propTypes = {};

  shouldComponentUpdate() {
      return false;
  }

  render() {
      const {
          props: {
              post,
              authors,
          },
      } = this;

      const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled';
      const description = RichText.asText(post.data.description) ? RichText.asText(post.data.description) : '';
      const displayDate = moment(post.data.date).format('MMM DD YYYY');
      const author = post.data.author ? _.find(authors, { id: post.data.author.id }) : null;
      const name = author ? author.data.name : 'Unknown';

      return (
          <Link
            as={linkResolver(post)}
            href={hrefResolver(post)}
          >
              <div className="blog-item clickable">
                  <div className="blog-item-content">
                      <h2>
                          {title}
                      </h2>
                      {description && (
                      <p>
                          {description}
                      </p>
                      )}
                      <div className="date">
                          {/* todo: */}
                          {`Published: ${displayDate} By ${name}:`}
                      </div>
                      <div className="tags mt-2">
                          {post.tags && post.tags.map(t => (
                              <BlogTag key={t} tag={t}/>
                          ))}
                      </div>
                  </div>
              </div>
          </Link>
      );
  }
}
