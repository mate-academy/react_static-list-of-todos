import React from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.css';

const Todo = ({ id, title, completed }) => (
  <>
    <p className={styles.title}>{`${id} ${title}`}</p>
    {completed
      ? (<p className={styles.completed}>Yes</p>)
      : (<p className={styles.notCompleted}>No</p>)}
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
