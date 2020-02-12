import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = (props) => {
  const { preparedArr } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Todo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {preparedArr.map(obj => <Todo todoObj={obj} />)}
      </tbody>
    </table>
  );
};

TodoList.propTypes = {
  preparedArr: PropTypes.arrayOf.isRequired,
};

export default TodoList;
