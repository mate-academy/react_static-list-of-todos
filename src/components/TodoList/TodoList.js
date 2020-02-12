import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import Todo from '../Todo/Todo';
import styles from './todoList.module.css';

const TodoList = ({ data = [] }) => (
  <>
    <h1>Todo List</h1>
    <ul>
      <>
        {data.map(item => (
          <li className={styles['card-item']} key={item.id}>
            <>
              <Todo {...item} />
              <User {...item.user} />
            </>
          </li>
        ))}
      </>
    </ul>
  </>
);

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default TodoList;
