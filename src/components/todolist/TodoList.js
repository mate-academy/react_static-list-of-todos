import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = ({ usersInfo }) => (
  <ul className="list">
    {usersInfo.map(oneOfUsersInfo => (
      <Todo userInfo={oneOfUsersInfo} key={oneOfUsersInfo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  usersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
