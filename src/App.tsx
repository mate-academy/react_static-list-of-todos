import React from 'react';
import './App.scss';
import classNames from 'classnames';

// import todos from './api/todos';
// import users from './api/users';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <ul className="todo-list">
      <li className="todo-list__item">
        <div className="todo-info">
          <a className="todo-info__link" href="/">
            <h2 className="todo-info__title">
              Debitis Accusantium Ut Quo Facilis Nihil Quis Sapiente Necessitatibus
            </h2>
          </a>
          <span className={classNames(
            'todo-info__status',
            {
              'todo-info__status--done': 'completed',
            },
          )}
          />
        </div>
        <div className="user-info">
          <p className="user-info__item">Name</p>
          <p className="user-info__item">UserName</p>
          <p className="user-info__item">Email</p>
        </div>
      </li>
      <li className="todo-list__item">
        <div className="todo-info">
          <a className="todo-info__link" href="/">
            <h2 className="todo-info__title">
              Dolorum Laboriosam Eos Qui Iure Aliquam
            </h2>
          </a>
          <span className={classNames(
            'todo-info__status',
            {
              'todo-info__status--done': 'completed',
            },
          )}
          />
        </div>
        <div className="user-info">
          <p className="user-info__item">Name#2</p>
          <p className="user-info__item">UserName#2</p>
          <p className="user-info__item">Email#2</p>
        </div>
      </li>
    </ul>
  </div>
);

export default App;
