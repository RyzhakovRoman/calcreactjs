const webpack = require('webpack');
const path = require('path');

const providePlugin = new webpack.ProvidePlugin({
    React: 'react',
});



module.exports = {
    entry: './src/js/app.jsx',
    output: {
        filename: 'calcBundle.js',
        path: path.resolve(__dirname, 'prod')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        providePlugin
    ]
};