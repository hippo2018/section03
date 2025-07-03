const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { name } = require('file-loader');
const { SourceMap } = require('module');

module.exports = {
    // 追加
  // devServer: {
  //   static: path.resolve(__dirname, 'src'),
  // },

  mode: 'development', // 'production' にすると圧縮されます
  // mode: 'production', // 'production' にすると圧縮されます、指定しなくてもデフォルトです
  devtool: 'source-map', // ソースマップを出力（デバッグ用）表面じょうは見やすくするため
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
        test: /\.js$/, // .js ファイルを対象
        exclude: /node_modules/, // node_modules フォルダは除外
        use: [
          {
            loader: 'babel-loader', // Babel を使用して ES6 を ES5 に変換
            options: {
              presets: [
                // ['@babel/preset-env'], // 最新の JavaScript 機能を変換
                ['@babel/preset-env', {'targets': '> 0.25%, not dead'}], // 最新の JavaScript 機能を変換
                // ['@babel/preset-env', {'targets': '> 30%, not dead'}], // 最新の JavaScript 機能を変換
              ]
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/, // .js ファイルを対象
        use: [
          {
            // loader: 'style-loader', // CSS を <style> タグに挿入
            loader: MiniCssExtractPlugin.loader, // CSS を別ファイルに抽出
          },
          {
            loader: 'css-loader', // CSS をバンドル
            options: {
              // sourceMap: true, // ソースマップを有効にする
              sourceMap: false, // ソースマップを無効にする
            },
          },
          {
            loader: 'sass-loader', // Sass を CSS に変換
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/, // 画像ファイルを対象
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
          {
            loader: 'image-webpack-loader', // 画像を圧縮
            options: {
              mozjpeg: {
                progressive: true, // JPEG 画像を圧縮
                quality: 65, // 圧縮率
              },
              optipng: {
                enabled: false, // PNG 画像の圧縮は無効
              },
              pngquant: {
                quality: [0.65, 0.90], // PNG 画像の圧縮率
                speed: 4, // 圧縮速度
              },
              gifsicle: {
                interlaced: false, // GIF 画像のインターレースを無効
              },
              webp: {
                quality: 75, // WebP 画像の圧縮率
              },
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
};
