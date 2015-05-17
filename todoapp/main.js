'use strict';

var React = require('react');
var ToDoList = require('./components/TodoList');
var TodoApp = React.createClass({
  getInitialState; function() {
    return {
      todos: []
    }
  },
  componenetsDidMount: function() {
    var todos = [
      {id: 1, content: 'todo 1'},
      {id: 2, content: 'todo 2'},
      {id: 3, content: 'todo 3'},
    ];
    this.setState({todos: todos});
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="todo" />
        <button onClick={ this.addTodo }>Add</button>
        <h2>Todos:</h2>
        <TodoList itmes={this.state.todos} />
      </div>
    )
  }
})
React.render(<TodoApp />, document.getElementById('example'));
