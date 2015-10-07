
var path = require('path');
var express = require('express');
var bloql = require('bloql/middleware/express');

const app = express();

// Create bloql backend
bloql(app, {

  // bloql takes all options from express-graphql (https://github.com/graphql/express-graphql)
  pretty: true,

  // postPath is the path to the folder containing the posts
  postsPath: path.join(__dirname, 'posts'),

  // This is an external package which will handle retrieving files and processing them
  database: require('bloql-markdown-file-database')

});

// Set a static folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started and listening on port 3000');
});
