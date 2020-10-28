import React from 'react';
// Project functions & styles
import Prismic from 'prismic-javascript';
import _ from 'lodash';
import BlogPost from '../../components/blog/BlogPost';
import { queryRepeatableDocuments, Client } from '../../prismic-functions';

/**
 * Post page component
 */
const Post = ({ post, related, author }) => {
    if (post && post.data) {
        return (
            <div>
                <BlogPost post={post} related={related} author={author}/>
            </div>
        );
    }

    return (
        <div>
           I think you are a bit lost.
        </div>
    );
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
    const { ref } = previewData;
    const post = await Client().getByUID('post', params.id, { ref }) || {};
    const related = post.data.related ? await Client().getByIDs(post.data.related.map(item => item.post.id)) : [];
    const authors = await Client().query(
        [
            Prismic.Predicates.at('document.type', 'author'),
        ], {
            ...(ref ? { ref } : null),
        },
    );

    const author = post.data.author ? _.find(authors && authors.results, { id: post.data.author.id }) : null;

    return {
        props: {
            preview,
            author,
            related,
            post,
        },
    };
}

export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments(doc => doc.type === 'post');
    return {
        paths: documents.map(doc => `/blog/${doc.uid}`),
        fallback: true,
    };
}

export default Post;
