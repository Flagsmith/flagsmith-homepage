import Prismic from 'prismic-javascript';
import Link from 'next/link';
import {
    apiEndpoint,
    accessToken,
    linkResolver,
    hrefResolver,
} from './prismic-configuration';

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
    <Link
      key={index}
      href={hrefResolver(element.data)}
      as={linkResolver(element.data)}
    >
        <a>{content}</a>
    </Link>
);


// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
);

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
    return {
        ...reqOption,
        ...accessTokenOption,
    };
};

async function fetchDocs(page = 1, routes = []) {
    const response = await Client().query('', { pageSize: 100, lang: '*', page });
    const allRoutes = routes.concat(response.results);
    if (response.results_size + routes.length < response.total_results_size) {
        return fetchDocs(page + 1, allRoutes);
    }
    return [...new Set(allRoutes)];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 * */
export const queryRepeatableDocuments = async (filter) => {
    const allRoutes = await fetchDocs();
    return allRoutes.filter(filter);
};

/** Fetches all Prismic tags
 * */
export const queryTags = async (filter) => {
    const tags = [];
    const docs = await queryRepeatableDocuments(doc => doc.type === 'post');
    docs.map((doc) => {
        doc.tags.map((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });
    return tags;
};

export const homePageQuery = async () => {
    const allRoutes = await fetchDocs();
    return allRoutes.filter(doc => doc.type === 'post').slice(0, 100);
};
