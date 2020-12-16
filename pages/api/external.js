export default async (req, res) => {
    res.redirect(req.query.url);
};
