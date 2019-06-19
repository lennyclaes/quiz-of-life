const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    optimization: {
        usedExports: true
    },
    entry: {
        style: './src/styles/styles.js',
        app: './src/app.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader },
                    { loader: "css-modules-typescript-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ["main.css"]
            }
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
            chunkFilename: "[id].css"
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new WebpackPwaManifest({
            name: 'My PWA Project',
            short_name: 'PWA',
            description: 'My PWA Boilerplate',
            background_color: '#bada55',
            theme_color: '#333333',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    destination: path.join('assets', 'icons')
                }
            ]
        })
    ]
};