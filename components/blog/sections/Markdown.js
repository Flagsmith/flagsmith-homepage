import React from 'react';
import { RichText } from 'prismic-reactjs';
import ReactMarkdown from 'react-markdown';
/**
 * Default image component
 */
const Markdown = ({ data }) => {
    return (
        <ReactMarkdown
          escapeHtml={false}
          source={data.primary.text}
        />
    );
};

export default Markdown;
