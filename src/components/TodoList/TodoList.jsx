import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

import './todoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <div className="todoList">
    {preparedTodos.map(listItem => (
      <React.Fragment key={listItem.id}>
        <Todo {...listItem} />
      </React.Fragment>
    ))}
  </div>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
