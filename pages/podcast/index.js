import React from 'react';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import sortBy from 'lodash/sortBy';
import moment from 'moment/min/moment.min';
import Link from 'next/link';
import { Client } from '../../prismic-functions';
import Footer from '../../components/Footer';
import BlogList from '../../components/blog/BlogList';
import BlogHero from '../../components/blog/BlogHero';
import usePreview from '../../components/blog/usePreview';
import LoadingPreview from '../../components/blog/LoadingPreview';
import PlayIcon from '../../components/PlayIcon';

const BlogPage = (props) => {
    const { doc, authors, posts, isLoading } = usePreview(props, getBlog);

    if (isLoading) {
        return <LoadingPreview/>;
    }
    if (!doc) {
        return <div>Great, now create your content in prismic!</div>;
    }
    return (
    <>
        <Head>
            <title>The Craft of Open Source - Podcast - Flagsmith</title>
        </Head>
        <BlogHero
          backgroundImage="/static/images/blog-hero.jpg"
          title={doc.data.title}
          subtitle={doc.data.subtitle}
          text={doc.data.description}
        />
        <BlogList authors={authors} doc={doc} posts={posts}/>
        <Footer className="homepage"/>
    </>
    );
};

const getBlog = async (ref) => {
    const client = Client();

    const doc = await client.getSingle('podcast_home', ref ? { ref } : null) || {};

    const posts = await client.query(
        [
            Prismic.Predicates.any('document.type', ['podcast_episode']),
        ], {
            ...(ref ? { ref } : null),
        },
    );

    posts.results = sortBy(posts.results, (res) => {
        const date = moment(res.data.date, 'YYYY-MM-DD');
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
