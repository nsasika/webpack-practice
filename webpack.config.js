const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //This property defines where the application starts
    entry: './src/index.js',
    //This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./build"
    },
    //Setup loaders
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // Setup plugin to use a HTML file for serving bundled js files
    plugins: [
        new HtmlWebpackPlugin({
            //template: './public/index.html'
            //template: './src/index.html'
            template: path.resolve('./index.html')
        })
    ],
    devtool: 'inline-source-map'
};
