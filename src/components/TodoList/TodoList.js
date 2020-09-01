import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ list }) => (
  list.map(item => <Todo key={item.id} {...item} />)
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
