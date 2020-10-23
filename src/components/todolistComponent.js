import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './todoComponent';
import { userNameProp, taskTypes } from './propTypesVars';

export function TodoList({ toDos }) {
  return (
    <ul className="tasks__list">
      {toDos.map(task => (
        <li className="tasks__card" key={task.id}>
          <Todo task={task} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.shape(
    {
      ...taskTypes.isRequired,
      user: PropTypes.shape(userNameProp).isRequired,
    }.isRequired,
  )).isRequired,
};
