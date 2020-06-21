import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import styles from './Todolist.module.css';

export const TodoList = props => (
  <div className={styles.list}>
    {props.list.map((item) => {
      const { title, completed, user } = item;
      const todo = {
        title, completed, user,
      };

      return (<Todo todo={todo} />);
    })}
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};
