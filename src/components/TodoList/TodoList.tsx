import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-list__item">
          <article
            className={classNames('todo-list__article', {
              complete: todo.completed,
            })}
          >
            {
              (todo.user !== null) ? (<UserInfo user={todo.user} />) : (
                <p>User not found</p>
              )
            }
            <TodoInfo todo={todo} />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
