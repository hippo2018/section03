const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development', // 'production' にすると圧縮されます
  mode: 'production', // 'production' にすると圧縮されます
  entry: './src/index.js', // エントリーファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力フォルダ
    filename: 'main.js', // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .js ファイルを対象
        use: [
          {
            // loader: 'style-loader', // CSS を <style> タグに挿入
            loader: MiniCssExtractPlugin.loader, // CSS を別ファイルに抽出
          },
          {
            loader: 'css-loader', // CSS をバンドル
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // 出力する CSS ファイル名
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // テンプレート HTML ファイル
      filename: 'index.html', // 出力する HTML ファイル名
    }),
  ],
  devtool: 'source-map', // ソースマップを出力（デバッグ用）
};
