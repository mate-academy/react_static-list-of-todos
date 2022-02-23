import React from 'react';
import './App.scss';
import classNames from 'classnames';
import { Todo } from './types/Todo';
import todos from './api/todos';
import users from './api/users';
import { User } from './types/User';

//-------------------------------------------------------------------------
type Props3 = {
  userInfo: User;
};

const UserInfo: React.FC<Props3> = (props) => {
  const { userInfo } = props;
  const { name, username, email } = userInfo;

  return (
    <>
      <div className="user-info">
        <p className="user-info__item">{`Name: ${name}`}</p>
        <p className="user-info__item">{`UserName: ${username}`}</p>
        <p className="user-info__item">{`Email: ${email}`}</p>
      </div>
    </>
  );
};
//-------------------------------------------------------------------------

type Props2 = {
  todoItem: Todo;
};

const TodoInfo: React.FC<Props2> = (props) => {
  const { todoItem } = props;
  const { title, completed, user } = todoItem;

  return (
    <>
      <div className="todo-info">
        <a className="todo-info__link" href="/">
          <h2 className="todo-info__title">
            {title}
          </h2>
        </a>
        <span className={classNames(
          'todo-info__status',
          {
            'todo-info__status--done': completed,
          },
        )}
        />
      </div>
      {user && (
        <UserInfo userInfo={user} />
      )}
    </>
  );
};
//-------------------------------------------------------------------------

type Props = {
  todoData: Todo[];
};

const TodoList: React.FC<Props> = (props) => {
  const { todoData } = props;

  // todoData.sort((x, y) => {
  //   if (x.user && y.user) {
  //     return x.user.name.localeCompare(y.user.name)
  //       || x.title.localeCompare(y.title);
  //   }

  //   return -1;
  // });

  return (
    <ul className="todo-list">
      {
        todoData.map(todo => (
          <li className="todo-list__item" key={todo.id}>
            <TodoInfo todoItem={todo} />
          </li>
        ))
      }
    </ul>
  );
};

//-------------------------------------------------------------------------

const state: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todoData={state} />
  </div>
);

export default App;
