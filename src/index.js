import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todos from './todos';
import users from './users';

ReactDOM.render(<App todos={todos} users={users} />, document.getElementById('root'));
