const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        // 使用vue-loader解析.vue文件
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader','less-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 不处理这两个文件夹里的内容
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { 
                loader: 'file-loader',
                options: {},
            },
        ]
      },
    ]
  },
  resolve:{
       // 用于查找模块的目录
    extensions: ['.js', '.json', '.jsx', '.css','.vue'],
    alias:{
      '@': path.resolve(__dirname, './src'),
      '&':path.resolve(__dirname, 'src','styles'),
    
    }
  },
  externals: {
    jquery: 'jQuery'
  },
  devServer: {
    host: '127.0.0.1',
    port: '8899',
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // ...
  },
  mode:'development',
  plugins:[
    new VueLoaderPlugin(),//这个插件是必须的！ 它的职责是将你定义过的其
    //它规则复制并应用到 .vue 文件里相应语言的块。
    //例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
    new HtmlWebpackPlugin({
      filename:'index.html', // 生成的文件名称
      template: path.resolve(__dirname, './src/index.html'), // 指定用index.html做模版
      inject: 'body' // 指定插入的<script>标签在body底部
    })

  ]
};
