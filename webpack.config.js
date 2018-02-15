const webpack = require('webpack');
const path = require('path');

const providePlugin = new webpack.ProvidePlugin({
    React: 'react',
});



module.exports = {
    entry: {
        calc_bundle: './src/js/app',
        test: './src/js/test',
        calc_vzr: './src/js/calc_vzr'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'prod/js')
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