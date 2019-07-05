import React from 'react';

const todosFromServer = [
  { id: 1, title: '111111' },
  { id: 2, title: '222222' },
  { id: 3, title: '333333' },
];

class App extends React.Component {
  state = {
    todos: [],
    isLoaded: false,
    isLoading: false,
  };

  handleClick = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        todos: todosFromServer,
        isLoaded: true,
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    return (
      <main>
        { this.state.isLoaded ? (
          <h1>Todos {this.state.todos.length}</h1>
        ) : (
          <button onClick={this.handleClick}>
            {this.state.isLoading ? 'Loading...' : 'Load' }
          </button>
        )}
      </main>
    );
  }
}

export default App;
