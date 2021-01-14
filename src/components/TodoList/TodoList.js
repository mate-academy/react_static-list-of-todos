import React from 'react';
import PropTypes from 'prop-types';

import { listType } from '../../types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ list }) => (

  <div className="TodoList">
    {list.map(item => (
      <Todo key={item.id} {...item} />
    ))}
  </div>
);

TodoList.propTypes = {
  list: PropTypes
    .arrayOf(PropTypes.shape(listType))
    .isRequired,
};
