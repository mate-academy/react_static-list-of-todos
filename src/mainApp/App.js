import React from "react";

import todos from "../api/todos";
import users from "../api/users";
import ToDoList from "../toDo/ToDoList";
import "../mainApp/App.css";

class App extends React.Component {
  state = {
    todos: [],
    sortField: "user"
  };

  componentDidMount() {
    this.setState({
      todos: this.findToDosAndUsers(todos, users)
    });
  }

  findToDosAndUsers = (todos, users) => {
    return todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId)
    }));
  };

  sortToDos = sortField => {
    const callbackMap = {
      title: (a, b) => a.title.localeCompare(b.title),
      user: (a, b) => a.user.name.localeCompare(b.user.name),
      completed: (a, b) => a.completed - b.completed
    };

    const callback = callbackMap[sortField] || callbackMap.title;

    return this.state.todos.sort(callback);
  };

  sortAndSetField = sortField => {
    this.setState({ sortField }, () =>
      this.setState({ todos: this.sortToDos(sortField) })
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Static list of todos</h1>
        <ToDoList onSort={this.sortAndSetField} toDoItems={this.state.todos} />
      </div>
    );
  }
}

export default App;
