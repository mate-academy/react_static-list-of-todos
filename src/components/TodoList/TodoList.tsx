import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../../types/Todo';

type Props = {
  props: Todo[],
};

export const TodoList: React.FC<Props> = ({ props }) => (
  <ul className="list">
    {props.map(prop => (
      <li
        className={classNames(
          'list__item item',
          { 'list__item--active': prop.completed },
        )}
        key={prop.id}
      >
        <TodoInfo todo={prop} />
      </li>
    ))}
  </ul>
);
