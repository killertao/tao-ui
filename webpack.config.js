const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//vue 必须组件
const HtmlWebpackPlugin = require('html-webpack-plugin');//hmtl index,页面生成插件
const CopyPlugin = require('copy-webpack-plugin');//文件copy 插件
const outputDir = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: outputDir,
  },
  module: {
    rules: [{
      // 使用vue-loader解析.vue文件
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader',

        },
        {
          loader: 'md-packing',
          options: {
            class: "markdown-body"
          }
        },
        {
          loader: 'vue-markdown-loader/lib/markdown-compiler',
          options: {
            raw: true
          }
        }
      ],

    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/, // 不处理这两个文件夹里的内容
      use: ['babel-loader']
      // loader: ''
    },
    {
      test: /\.ts$/,
      use: 'ts-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {},
      },]
    }
    ]
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: [
      'node_modules', path.resolve(__dirname, 'loaders')
    ]
  },
  resolve: {
    // 用于查找模块的目录
    extensions: ['.js', '.json', '.jsx', '.css', '.vue', '.node'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/styles'),
    }
  },

  externals: {

  },
  devServer: {
    host: '127.0.0.1',
    port: '8899',
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // ...
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(), //这个插件是必须的！ 它的职责是将你定义过的其
    //它规则复制并应用到 .vue 文件里相应语言的块。
    //例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的文件名称
      template: path.resolve(__dirname, './src/index.html'), // 指定用index.html做模版
      inject: 'body' // 指定插入的<script>标签在body底部
    }),
    new CopyPlugin(//静态文件复制插件
      [
        { from: path.resolve(__dirname, './src/static'), to: outputDir },
      ]
    ),
  ]
};