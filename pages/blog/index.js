import React from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../prismic-functions';
import Footer from '../../components/Footer';
import BlogList from '../../components/blog/BlogList';

const BlogPage = ({ doc, authors, posts }) => {
    if (!doc) {
        return <div>Great, now create your content in prismic!</div>;
    }
    return (
    <>
        <BlogList authors={authors} doc={doc} posts={posts}/>
        <Footer className="homepage"/>
    </>
    );
};


export async function getStaticProps({ preview = null, previewData = {} }) {
    const { ref } = previewData;

    const client = Client();

    const doc = await client.getSingle('blog_home', ref ? { ref } : null) || {};

    const posts = await client.query(
        [
            Prismic.Predicates.at('document.type', 'post'),
        ], {
            orderings: '[my.post.date desc]',
            ...(ref ? { ref } : null),
        },
    );

    const authors = await client.query(
        [
            Prismic.Predicates.at('document.type', 'author'),
        ], {
            ...(ref ? { ref } : null),
        },
    );

    return {
        props: {
            doc,
            authors: authors ? authors.results : [],
            posts: posts ? posts.results : [],
            preview,
        },
    };
}

export default BlogPage;
