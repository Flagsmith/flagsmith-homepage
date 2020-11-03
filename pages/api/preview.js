import { linkResolver } from '../../prismic-configuration';
import { Client } from '../../prismic-functions';

export default async (req, res) => {
    const { token: ref, documentId } = req.query;
    const redirectUrl = await Client(req).getPreviewResolver(ref, documentId).resolve(linkResolver, '/');

    if (!redirectUrl) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('Setting preview data to', ref);
    res.setPreviewData({ ref });
    res.writeHead(302, { Location: `${redirectUrl}` });

    res.end();
};
