import redirect from 'nextjs-redirect';

export default async (req,res) => {
    res.redirect(req.query.url);
};
