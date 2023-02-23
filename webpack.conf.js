var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: "index.js",
        library: "BatmanToolsBelt",
    }
};