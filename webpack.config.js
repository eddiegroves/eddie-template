var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      app: [ './src/index.js' ],
      common: [ 'react', 'mobx', 'mobx-react', 'tslib' ],
    },
    
    output: {
        filename: "./dist/app.js",
    },

    module: {
        loaders: [
            // CSS modules
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ]
    },

    plugins: [
      // Places css modules into single css file
      new ExtractTextPlugin('./dist/style.css', { allChunks: true }),

      // Places common modules into single js file
      new CommonsChunkPlugin({
        name: "common",
        filename: "./dist/common.js",
      })
    ]
};
