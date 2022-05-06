import React from 'react';
import './App.scss';
import classNames from 'classnames';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  User: (users.find(user => user.id === todo.userId) || null),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div className="todo-list">
      {preparedTodos.map(({
        id,
        title,
        completed,
        User,
      }) => (
        <>
          <div className={classNames('todo-card',
            { 'todo-card__done': completed === true })}
          >
            <div className="todo-title">
              <p>
                Title:&#160;&#160;
                {title}
              </p>
            </div>
            <div>
              Responsible person:&#160;
              <br />
            </div>
            <div className="todo-person">
              <p>
                {User ? (
                  <>
                    {User.name}
                    <br />
                    <a href={`mailto:${User.email}`}>{User.email}</a>
                  </>
                ) : null}
              </p>
            </div>
            <div>
              {'Task ID: '}
              {id}
            </div>
            <p>
              status:&#160;
              {completed ? 'Done' : 'Undone'}
            </p>
          </div>
        </>
      ))}
    </div>
  </div>
);

export default App;
