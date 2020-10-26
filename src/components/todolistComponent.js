import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './todoComponent';
import { userPropTypes, taskPropTypes } from './propTypesVars';

export const TodoList = ({ toDos }) => (
  <ul className="tasks__list">
    {toDos.map(task => (
      <li className="tasks__card" key={task.id}>
        <Todo task={task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.shape(
    {
      ...taskPropTypes.isRequired,
      user: userPropTypes.isRequired,
    }.isRequired,
  )).isRequired,
};
