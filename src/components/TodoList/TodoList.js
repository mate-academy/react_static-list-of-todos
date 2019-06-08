import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [...props.todosList]
    };

    this._toggleCompleted = this._toggleCompleted.bind(this);
  }

  _toggleCompleted(toggledItemId) {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(item => {
        const { id, title, user } = item;
        let { completed } = item;

        if (id === toggledItemId) completed = !completed;

        return {
          id: id,
          title: title,
          completed: completed,
          user: user
        }
      });

      return {
        todos: newTodos
      }
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.todos.reduce((acc, item) => {
          return [...acc, (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              userInfo={item.user}
              onToggleCompleted={this._toggleCompleted}
            />
          )];
        }, [])}
      </div>
    );
  }
}

export default TodoList;
