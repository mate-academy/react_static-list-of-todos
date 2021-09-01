import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <>
      <section className="table">
        <ul className="table__top">
          <li className="table__column_name">
            Name
          </li>
          <li className="table__column_name">
            Username
          </li>
          <li className="table__column_name">
            Email
          </li>
          <li className="table__column_name">
            Title
          </li>
          <li className="table__column_name">
            Status
          </li>
        </ul>

        <ul className="table__body">
          {todos.map(todo => (
            <li
              className={classNames(
                'table__item',
                {
                  table__item_done: todo.completed,
                },
              )}
              key={todo.id}
            >
              <TodoInfo todo={todo} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
