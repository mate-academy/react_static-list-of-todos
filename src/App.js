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
    todos: todosWithUser,
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Static list of todos
          {this.state.count}
        </h1>

        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
