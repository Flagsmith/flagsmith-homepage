import React from 'react';
import { RichText } from 'prismic-reactjs';
import { customLink } from '../../../prismic-functions';
import { linkResolver } from '../../../prismic-configuration';

/**
 * Text slice component
 */
const Text = ({ data }) => (
    <div className="post-part single">
        <RichText
          render={data.primary.text}
          linkResolver={linkResolver}
          serializeHyperlink={customLink}
        />
    </div>
);

export default Text;
