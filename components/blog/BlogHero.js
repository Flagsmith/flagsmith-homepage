import React, { FunctionComponent } from 'react'; // we need this to make JSX compile
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import { customLink } from '../../prismic-functions';

const TheComponent = ({
    backgroundImage,
    title,
    subtitle,
    link,
    text,
}) => {
    return (
        <div
          className="blog-hero-gradient"
        >
            <div
              style={backgroundImage && {
                  backgroundImage: `url("${backgroundImage}")`,
              }}
              className="blog-hero"
            >
                <div className="container">
                    <div>
                        <div className="mb-4">
                            <RichText
                              render={title}
                              linkResolver={linkResolver}
                              serializeHyperlink={customLink}
                            />
                        </div>
                        <div className="mb-4">
                            <RichText
                              render={subtitle}
                              linkResolver={linkResolver}
                              serializeHyperlink={customLink}
                            />
                        </div>
                        <RichText
                          render={text}
                          linkResolver={linkResolver}
                          serializeHyperlink={customLink}
                        />
                        {link && (
                          <div className="mt-5">
                            {link}
                          </div>
                          )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TheComponent;
