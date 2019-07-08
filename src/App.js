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
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return todos;
};


const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
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
