//permite trabajar con rutas sin importar window linux
const path = require("path");
//plugins
//MiniCSSExtractPlugin es una clase que hay que instancear con new
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Dev server'
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
