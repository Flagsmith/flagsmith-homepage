import React from 'react';
// Project functions & styles
import Prismic from 'prismic-javascript';
import _ from 'lodash';
import BlogPost from '../../components/blog/BlogPost';
import { queryRepeatableDocuments, Client } from '../../prismic-functions';
import usePreview from '../../components/blog/usePreview';
import LoadingPreview from '../../components/blog/LoadingPreview';
import Footer from '../../components/Footer';

/**
 * Post page component
 */
const Post = (props) => {
    const { post, related, author, isLoading } = usePreview(props, getPost);
    if (isLoading) {
        return <LoadingPreview/>;
    }
    if (post && post.data) {
        return (
            <div>
                <BlogPost post={post} related={related} author={author}/>
                <Footer className="homepage"/>
            </div>
        );
    }

    return (
        <div className="mt-4 text-center">
           This blog post cannot be found, it may not be published.
        </div>
    );
};

const getPost = async (ref, params) => {
    const post = await Client().getByUID('post', params.id, { ref }) || {};
    const related = post.data && post.data.related ? await Client().getByIDs(post.data.related.map(item => item.post.id)) : [];
    const authors = await Client().query(
        [
            Prismic.Predicates.at('document.type', 'author'),
        ], {
            ...(ref ? { ref } : null),
        },
    );

    const author = post.data && post.data.author ? _.find(authors && authors.results, { id: post.data.author.id }) : null;

    return {
        props: {
            author,
            related,
            post,
        },
    };
};

export async function getStaticProps({ params }) {
    const res = await getPost(null, params);
    return res;
}

export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments(doc => doc.type === 'post');
    return {
        paths: documents.map(doc => `/blog/${doc.uid}`),
        fallback: true,
    };
}

export default Post;
