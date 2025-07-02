const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'development', // 'production' にすると圧縮されます
  mode: 'production', // 'production' にすると圧縮されます
  entry: './src/javascripts/main.js', // エントリーファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力フォルダ
    filename: 'javascripts/my.js', // 出力ファイル名
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
      filename: './stylesheets/main.css', // 出力する CSS ファイル名
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html', // テンプレート HTML ファイル
      filename: 'index.html', // 出力する HTML ファイル名
    }),
    new CleanWebpackPlugin(), // 出力フォルダをクリーンアップ
  ],
  devtool: 'source-map', // ソースマップを出力（デバッグ用）
};
