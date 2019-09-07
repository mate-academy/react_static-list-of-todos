import React from "react";

import todos from "../api/todos";
import users from "../api/users";
import ToDoList from "../toDo/ToDoList";
import {
  SORT_ORDER_TITLE,
  SORT_ORDER_COMPLETED,
  SORT_ORDER_USER,
  SORT_ORDER_TITLE_BACK,
  SORT_ORDER_COMPLETED_BACK,
  SORT_ORDER_USER_BACK
} from "../helper/Helper";
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
      [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title),
      [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name),
      [SORT_ORDER_COMPLETED]: (a, b) => a.completed - b.completed,
      [SORT_ORDER_TITLE_BACK]: (a, b) => b.title.localeCompare(a.title),
      [SORT_ORDER_USER_BACK]: (a, b) => b.user.name.localeCompare(a.user.name),
      [SORT_ORDER_COMPLETED_BACK]: (a, b) => b.completed - a.completed
    };

    const callback = callbackMap[sortField] || callbackMap.title;

    return this.state.todos.sort(callback);
  };

  sortAndSetField = sortField => {
    this.setState({ sortField, todos: this.sortToDos(sortField) });
  };

  render() {
    return (
      <div className="App">
        <h1>Static list of todos</h1>
        <ToDoList
          sortBy={this.sortAndSetField}
          sorted={this.state.sortField}
          toDoItems={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
