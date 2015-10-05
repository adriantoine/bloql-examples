
var path = require('path');
var express = require('express');
var bloql = require('bloql/middleware/express');

const app = express();

bloql(app, {
  pretty: true,
  postsPath: path.join(__dirname, 'posts'),
  database: require('bloql-markdown-file-database')
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started and listening on port 3000');
});
