import React from 'react';

import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';

function getUser(userId) {
  return users.find(user => user.id === userId);
}

const todosWithUser = todos.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

class App extends React.Component {
  state = {
    count: 0,
    todos: todosWithUser
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { test } = this.props;

    return (
      <div className="App">
        <h1 onClick={this.handleClick}>
          Static list of todos
          {this.state.count}
          {this.props.test}
        </h1>

        <TodoList todos={todosWithUser} />
      </div>
    );
  }
}

export default App;
