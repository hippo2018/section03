const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { name } = require('file-loader');

module.exports = {
    // 追加
  // devServer: {
  //   static: path.resolve(__dirname, 'src'),
  // },

  // mode: 'development', // 'production' にすると圧縮されます
  mode: 'production', // 'production' にすると圧縮されます
  entry: {
    main: './src/javascripts/main.js',
  }, // エントリーファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力フォルダ
    filename: 'javascripts/my.js', // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/, // .js ファイルを対象
        use: [
          {
            // loader: 'style-loader', // CSS を <style> タグに挿入
            loader: MiniCssExtractPlugin.loader, // CSS を別ファイルに抽出
          },
          {
            loader: 'css-loader', // CSS をバンドル
          },
          {
            loader: 'sass-loader', // Sass を CSS に変換
          },
        ],
      },
      {
        test: /\.(png|jpg)/, // 画像ファイルを対象
        use: [
          {
            // loader: 'url-loader', // 画像を base64 エンコードしてバンドル
            loader: 'file-loader', // 画像をファイルとして出力
            options: {
              esModule: false, // CommonJS モジュールとして扱う
              // name: 'images/icon.png', // 出力する画像ファイル名
              // name: 'images/[hash].[ext]', // 出力する画像ファイル名（ハッシュ値を付与）
              name: 'images/[name].[ext]', // 出力する画像ファイル名（ハッシュ値を付与）
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader', // HTML をバンドル
            // options: {
            //   esModule: false, // CommonJS モジュールとして扱う
            // },
          },
          {
            loader: 'pug-html-loader', // Pug を HTML に変換
            options: {
              pretty: true, // インデントを整える
            },
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
      // template: './src/templates/index.html', // テンプレート HTML ファイル
      template: './src/templates/index.pug', // Pug テンプレートファイル
      filename: 'index.html', // 出力する HTML ファイル名
    }),
    new HtmlWebpackPlugin({
      // template: './src/templates/index.html', // テンプレート HTML ファイル
      template: './src/templates/access.pug', // Pug テンプレートファイル
      filename: 'access.html', // 出力する HTML ファイル名
    }),
    new HtmlWebpackPlugin({
      // template: './src/templates/index.html', // テンプレート HTML ファイル
      template: './src/templates/members/taro.pug', // Pug テンプレートファイル
      filename: 'members/taro.html', // 出力する HTML ファイル名
    }),
    new CleanWebpackPlugin(), // 出力フォルダをクリーンアップ
  ],
  devtool: 'source-map', // ソースマップを出力（デバッグ用）
};
