var express = require('express');
var app = express();
app.use(express.static('public'));
var todos = require('./routes/todo');
app.use('/todos', todos);
app.listen(3000, function(){
  console.log('Listen on port 3000');
});
/*
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/todos', function(req, res) {
  var todos = ['todo item1', 'todo item 2', 'todo item 3'];
  console.log(req.query.limit);
  if (req.query.limit >= 0) {
    todos.splice(req.query.limit);
  }
  else {

  }
  res.json(todos);
});
app.listen(3000, function(){
  console.log('Listen on port 3000');
});
*/
