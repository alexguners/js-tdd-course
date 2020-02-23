const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  mode: nodeENV,
  entry: {
    filename: './src/app.js',
  },
  output: {
    filename: './buid.js',
  },
  watch: true,
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      process_env: { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
