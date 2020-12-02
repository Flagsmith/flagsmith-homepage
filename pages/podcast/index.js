import React from 'react';
import Prismic from 'prismic-javascript';
// Project components & functions
import { Client, queryTags } from '../../prismic-functions';
import Footer from '../../components/Footer';
import BlogList from '../../components/blog/BlogList';
import usePreview from '../../components/blog/usePreview';
import LoadingPreview from '../../components/blog/LoadingPreview';
import BlogItem from '../../components/blog/BlogItem';
import BlogBody from '../../components/blog/BlogBody';

const BlogPage = (props) => {
    const { doc, authors, posts, isLoading } = usePreview(props, getBlogByTag);

    if (isLoading) {
        return <LoadingPreview/>;
    }
    if (!doc) {
        return <div className="blog container">Great, now create your content in prismic!</div>;
    }
    return (
        <div className="blog">
            <div className="container mt-5">
                <BlogBody sections={doc.data.body}/>

                {posts.map(b => (
                    <BlogItem key={b.id} authors={authors} post={b}/>
                ))}
            </div>
            <Footer className="homepage"/>
        </div>
    );
};

const getBlogByTag = async (ref, params) => {
    const client = Client();

    const doc = await client.getSingle('podcast_home', ref ? { ref } : null) || {};

    const posts = await client.query(
        [
            Prismic.Predicates.at('document.type', 'post'),
            Prismic.Predicates.at('document.tags', ['podcast']),
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
        },
    };
};

export async function getStaticProps({ params }) {
    const res = await getBlogByTag(null, params);
    return res;
}


export default BlogPage;
