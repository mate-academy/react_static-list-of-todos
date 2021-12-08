import React from 'react';

import ToDo from '../types/ToDo';

import TodoInfo from './TodoInfo';

type Props = {
  list: ToDo[],
};

const TodoList: React.FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(listItem => (
      <li className="list__item" key={listItem.id}>
        <TodoInfo todo={listItem} />
      </li>
    ))}
  </ul>
);

export default TodoList;
