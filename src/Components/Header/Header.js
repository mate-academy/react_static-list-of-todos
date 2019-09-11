import React from 'react';
import apiusers from '../../api/api-users';
import apitodos from '../../api/api-todos';
import './Header.css';

const Header = () => (
  <div className="app">
    <h1 className="app-title">
      Static list of todos
    </h1>

    <p className="todos-count">
      <span className="todos__title">Todos: </span>
      {apitodos.length}
    </p>

    <p className="users-count">
      <span>Users: </span>
      {apiusers.length}
    </p>
  </div>
);

export default Header;
