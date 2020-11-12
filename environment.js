const env = {
    gaAPIKey: process.env.GA_API_KEY,
    githubKey: process.env.GITHUB_KEY,
    gaClientId: process.env.GA_CLIENT_ID,
};
module.exports = {
    'projectOverrides': JSON.stringify(env),
};
