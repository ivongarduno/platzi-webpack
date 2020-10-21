//permite trabajar con rutas sin importar window linux
const path = require("path");

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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
