// webpack.config.dev.js
const webpack = require('webpack');

module.exports = {
    plugins: require('./plugins').concat([
        new webpack.DefinePlugin(require('../environment')),
    ]),
    module: {
        rules: require('./loaders')
            .concat([]),
    },
};
