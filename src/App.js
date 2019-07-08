import React from 'react';

// const xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//
// xhr.addEventListener('load', () => {
//   console.log('response');
// });
//
// xhr.send();


const getTodos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const response = await fetch(url);
  const todos = await response.json();

  return todos;
};


const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(url);
  const users = await response.json();

  return users;
};

class App extends React.Component {
  async componentDidMount() {
    const todos = await getTodos();
    const users = await getUsers();
  }

  render() {
    return (
      <main>
        <h1>Hello</h1>
      </main>
    );
  }
}

export default App;
