import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import styles from './Todolist.module.css';
import { todoShape } from '../shapes/TodoShape';

export const TodoList = props => (
  <div className={styles.list}>
    {props.list.map((item) => {
      const { id, title, completed, user } = item;
      const todo = {
        title, completed, user,
      };

      return (<Todo key={id} todo={todo} />);
    })}
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(todoShape).isRequired,
};
