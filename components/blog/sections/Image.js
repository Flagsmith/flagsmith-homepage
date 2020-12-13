import React from 'react';
import { RichText } from 'prismic-reactjs';

/**
 * Default image component
 */
const Image = ({ data }) => {
    const imageUrl = data.primary.image.url;
    const imageAlt = data.primary.image.alt;
    const caption = data.primary.caption;

    return (
        <div className="post-part single">
            <div className={`block-img`}>
                <img src={imageUrl} alt={imageAlt} />
                <p>
                    <span className="image-label">
                        {RichText.asText(caption)}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Image;
