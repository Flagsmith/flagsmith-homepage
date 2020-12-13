import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../prismic-configuration';
import { customLink } from '../../../prismic-functions';

/**
 * Default image component
 */
const Image = ({ data }) => {
    const imageUrl = data.primary.avatar.url;
    const imageAlt = data.primary.avatar.alt;
    const title = data.primary.title;
    const text = data.primary.text;

    return (
        <div className="post-part about-author mb-5">
            <div className="mb-4">
                <span className="title">
                    {RichText.asText(title)}
                </span>
            </div>
            <div className="block-img">
                <img className="avatar mb-4" src={imageUrl} alt={imageAlt} />
                <div className="text">
                    <RichText
                      render={text}
                      linkResolver={linkResolver}
                      serializeHyperlink={customLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Image;
