import React from 'react';

import Image from './sections/Image';
import Text from './sections/Text';
import Quote from './sections/Quote';
import Markdown from './sections/Markdown';
/**
 * Post slice zone component
 */
const BlogBody = ({ sections }) => (
    sections.map((slice, index) => {
        switch (slice.slice_type) {
            case ('image_with_caption'):
                return <Image data={slice} key={`slice-${index}`} />;
            case ('quote'):
                return <Quote data={slice} key={`slice-${index}`} />;
            case ('text'):
                return <Text data={slice} key={`slice-${index}`} />;
            case ('markdown'):
                return <Markdown data={slice} key={`slice-${index}`} />;
            default: {
                return null;
            }
        }
    })
);

export default BlogBody;
