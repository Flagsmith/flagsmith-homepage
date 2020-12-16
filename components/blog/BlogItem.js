import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment/min/moment.min';
import { RichText } from 'prismic-reactjs';
import _ from 'lodash';
import BlogTag from './BlogTag';
import { hrefResolver, linkResolver } from '../../prismic-configuration';
import PlayIcon from '../PlayIcon';
import { customLink } from '../../prismic-functions';

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
                      {post.type === 'podcast_episode' ? (
                        <>
                            <Row>
                                <img
                                  className="mr-4 avatar"
                                  src={post.data.thumbnail.url || '/static/images/default-avatar.svg'}
                                />
                                <Flex>
                                    <Row className="player-panel mb-4">
                                        <div className="play-button">
                                            <div className="play-button-container">
                                                <PlayIcon/>
                                            </div>
                                        </div>
                                        <div style={{ paddingLeft: 34 }}>
                                            <Row style={{ height: 34 }}>
                                                <span className="episode-number mr-3">
                                          Eps. {post.data.episode_number}
                                                </span>
                                                <span className="title">
                                                    {RichText.asText(post.data.company_name)}
                                                </span>
                                            </Row>
                                            <span className="duration">
                                                {RichText.asText(post.data.duration)}
                                            </span>
                                        </div>
                                    </Row>
                                    <div className="pl-2 pr-2">
                                        <p>
                                            <strong>
                                        With our guest{post.data.multiple_guests ? 's' : ''} {post.data.guest_name}, {post.data.guest_job_title} @ {RichText.asText(post.data.company_name)}
                                            </strong>
                                        </p>
                                        
                                        <div className="tags mt-2">
                                            {post.tags && post.tags.map(t => (
                                                <BlogTag key={t} tag={t}/>
                                            ))}
                                            <BlogTag tag="podcast"/>
                                        </div>
                                    </div>
                                </Flex>

                            </Row>
                        </>
                      ) : (
                          <Row className="no-wrap">
                              <img
                                className="mr-4 avatar-small"
                                src={(author && author.data.avatar && author.data.avatar.url) || '/static/images/default-avatar.svg'}
                              />
                              <div>
                                  <div className="title mb-4">
                                      {title}
                                  </div>
                                  {description && (
                                  <p>
                                      {description}
                                  </p>
                                  )}
                                  <div className="tags mt-2">
                                      {post.tags && post.tags.map(t => (
                                          <BlogTag key={t} tag={t}/>
                                      ))}
                                      {post.type === 'podcast_episode' && (
                                      <BlogTag tag="podcast"/>
                                      )}
                                  </div>
                              </div>

                          </Row>
                      )}

                  </div>
              </div>
          </Link>
      );
  }
}
