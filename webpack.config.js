module.exports = {
  entry: "./Script/main.ts",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
  },
  resolve: {
    extensions: [".ts", "js"],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: "ts-loader",
      },
    ],
  },
};
