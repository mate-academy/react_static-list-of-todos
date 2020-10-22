import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ arrayOfTodos }) => (
  <>
    {arrayOfTodos.map(item => (
      <div key={item.id}>
        <div>
          <Todo {...item} />
        </div>
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  arrayOfTodos: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
    }),
  ).isRequired,
};
