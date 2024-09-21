const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Add plugin to extract CSS

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tg-booking-calendar.min.js', // Output JavaScript bundle
    path: path.resolve(__dirname, 'dist'),
    library: 'TgCalendar', // Expose the library globally
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS into separate file
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'tg-booking-calendar.min.css', // Output CSS file
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
    ],
  },
};