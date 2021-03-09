import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import styles from './Todolist.module.css';
import { TodoShape } from '../shapes/TodoShape';

export const TodoList = ({ list }) => (
  <div className={styles.list}>
    {
      list.map(item => (<Todo key={item.id} todo={item} />))
    }
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(TodoShape).isRequired,
};
