var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
      app: [ './src/index.js' ],
      common: [ 'react', 'mobx', 'mobx-react', 'tslib' ],
    },
    
    output: {
        filename: "./dist/app.js",
    },

    plugins: [
      // Places common modules into single js file
      new CommonsChunkPlugin({
        name: "common",
        filename: "./dist/common.js",
      })
    ]
};
