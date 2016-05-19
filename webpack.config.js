module.exports = {
  context: __dirname + "/static",

  entry: {
    client: './client.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + "/static/build"
  },

  resolve: {
      extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
