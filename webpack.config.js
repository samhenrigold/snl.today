const path = require('path');

module.exports = {
  entry: './src/assets/dateset.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'dateset.js'
  }
};