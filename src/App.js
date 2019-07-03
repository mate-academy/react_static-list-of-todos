import React from 'react';

class App extends React.Component {
  state = {
    selectedTodoId: null,

    todosFromServer: [
      { id: 1, title: '111111'},
      { id: 2, title: '222222'},
      { id: 3, title: '333333'},
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Todos {this.state.selectedTodoId}</h1>

        <TodoList
          items={this.state.todosFromServer}
          onTodoSelected={(todoId) => {
            this.setState({
              selectedTodoId: todoId
            });
          }}
        />
      </div>
    );
  }
}

function TodoList(props) {
  console.log('render');

  return (
    <ul>
      {props.items.map(todo => (
        <li
          key={todo.id}
          onClick={() => {
            props.onTodoSelected(todo.id);
          }}
        >
          {todo.title}
          <input type="text" />
        </li>
      ))}
    </ul>
  );
}

export default App;
