import Project from './common/project';

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = Project.prismic;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = '';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'post') {
        return `/blog/${doc.uid}`;
    } if (doc.type === 'podcast_episode') {
        return `/podcast/${doc.uid}`;
    }
    return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
    if (doc.type === 'post') {
        return '/blog/[uid]';
    }
    return '/';
};

export const PrismicScript = () => {
    const [, repoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);
    return (
        <script async defer src={`https://static.cdn.prismic.io/prismic.min.js?repo=${repoName}&new=true`} />
    );
};

export default PrismicScript;
