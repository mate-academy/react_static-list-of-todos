import React from 'react';

import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  toDos: Todo[];
};

export const TodoList: React.FC<Props> = ({ toDos }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <td> Name </td>
          <td> Username </td>
          <td> Email </td>
          <td> Title </td>
          <td> Completed </td>
        </tr>
      </thead>
      <tbody>
        {
          toDos.map(item => (
            <tr
              key={item.id}
              className={classNames(
                'table__row',
                { 'table__completed--yes': item.completed },
                { 'table__completed--no': !item.completed },
              )}
            >
              { item.user && <TodoInfo {...item} /> }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
