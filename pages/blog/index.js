import React from 'react';
import Prismic from 'prismic-javascript';
import sortBy from 'lodash/sortBy';
import moment from 'moment/min/moment.min';
import { Client } from '../../prismic-functions';
import Footer from '../../components/Footer';
import BlogList from '../../components/blog/BlogList';
import BlogHero from '../../components/blog/BlogHero';
import usePreview from '../../components/blog/usePreview';
import LoadingPreview from '../../components/blog/LoadingPreview';

const BlogPage = (props) => {
    const { doc, authors, posts, isLoading } = usePreview(props, getBlog);

    if (isLoading) {
        return <LoadingPreview/>;
    }
    if (!doc) {
        return <div>Great, now create your content in prismic!</div>;
    }
    console.log(doc)
    return (
    <>
        <BlogList authors={authors} doc={doc} posts={posts}/>
        <Footer className="homepage"/>
    </>
    );
};


const getBlog = async (ref) => {
    const client = Client();

    const doc = await client.getSingle('blog_home', ref ? { ref } : null) || {};

    const posts = await client.query(
        [
            Prismic.Predicates.any('document.type', ['post', 'podcast_episode']),
        ], {
            ...(ref ? { ref } : null),
        },
    );

    let episode_number = 1;
    posts.results = sortBy(posts.results, (res) => {
        const date = moment(res.data.date, 'YYYY-MM-DD');
        if (res.type === 'podcast_episode') {
            res.data.episode_number = episode_number++;
        }
        return date.valueOf() * -1;
    });

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

export async function getStaticProps() {
    const res = await getBlog(null);
    return res;
}

export default BlogPage;
