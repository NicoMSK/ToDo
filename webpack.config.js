const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const FaviconsWabpackPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
	assetModuleFilename: "images/[name].[contenthash][ext]",
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'template.html'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new FaviconsWabpackPlugin({
      logo: 'src/favicons/favicon.svg',
      mode: 'webapp',
      devMode: 'webapp',
      prefix: 'favicons/',
      cache: true,
      inject: true,
      favicons: {
        icons: {
          android: [
            "android-chrome-144x144.png",
            "android-chrome-192x192.png",
            "android-chrome-384x384.png"
          ],
          appleIcon: ["apple-touch-icon-180x180.png"],
          appleStartup: false,
          favicons: [
            "favicon.svg",
            "favicon.ico"
          ],
          firefox: false,
          windows: false,
          coast: false,
          yandex: false,
        },
      },
    }),
    new CopyPlugin({ /// этот плагин помог отобразить картинки и sprite.svg
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'), /// картинки
          to: path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src', 'icons'), /// sprite.svg
          to: path.resolve(__dirname, 'dist', 'icons'),
        }
      ]
    }),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};
