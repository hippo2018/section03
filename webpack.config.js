const path = require('path');

module.exports = {
  // mode: 'development', // 'production' にすると圧縮されます
  mode: 'production', // 'production' にすると圧縮されます
  entry: './src/index.js', // エントリーファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力フォルダ
    filename: 'main.js', // 出力ファイル名
  },
  devtool: 'source-map', // ソースマップを出力（デバッグ用）
};
