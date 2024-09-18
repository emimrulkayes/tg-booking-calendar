const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tg-booking-calendar.min.js', // Output JavaScript bundle
    path: path.resolve(__dirname, 'dist'),
    library: 'TgCalendar', // Expose the library globally
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
