import React from 'react';
import './Header.css';

const Header = ({ usersCount, todosCount }) => (
    <div className="container mb-5">
      <div className="row">
        <header className="col text-center">
          <h1>Static list of todos</h1>
          <p>
            <span>Todos: </span>
            {todosCount}
          </p>
          <p>
            <span>Users: </span>
            {usersCount}
          </p>
        </header>
      </div>
    </div>
  );

export default Header;