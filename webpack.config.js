const path = require('path');

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'prod')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};