const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css)$/,
          use: ['style-loader','css-loader', 'sass-loader']
       },
       {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
    },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'bundle.js',
    },
    devServer: {
      inline: true,
      port: 8081,
      contentBase: path.resolve(__dirname, './public'),
    },
  };

//   module.exports = {
//     mode: "production",
//     entry: path.resolve(__dirname, './src/index.js'),
//     devtool: "source-map",
//     module: {
//         rules: [
//           {
//              test: /\.(js|jsx)$/,
//              exclude: /node_modules/,
//              use: ['babel-loader']
//           },
//           {
//              test: /\.(s(a|c)ss)$/,
//              use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
//           }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//     plugins: [new MiniCssExtractPlugin()],
//     output: {
//         path: path.resolve(__dirname, './public'),
//         filename: 'bundle.js',
//     },
// };