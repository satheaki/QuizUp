const path = require("path");

console.log(path.join(__dirname, "public"));

module.exports = {
  //entry point
  entry: "./src/App.js",
  //final bundle file
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
    //historyApiFallback: true
  }
};
