import React from 'react'
import { RichText } from 'prismic-reactjs'

/**
 * Quote slice component
 */
const Quote = ({ data }) => data?.primary?.quote && (
  <div className="post-part single">
    <blockquote className="block-quotation">
      “{RichText.asText(data.primary.quote)}”
    </blockquote>
  </div>
)

export default Quote
