var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack/webpack.development.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  watchOptions: {
    poll: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/assets',  express.static(__dirname + '/assets'));

app.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
