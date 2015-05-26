var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var todos = [
  'Todo item 1',
  'Todo item 2',
  'Todo item 3',
];
router.route('/')
      .get(function(req, res, next) {
        if (req.query.limit >= 0) {
          todos.splice(req.query.limit);
        }
        else {

        }
        res.json(todos);
      }); //the root path relative to the path where its mounted
module.exports = router;
