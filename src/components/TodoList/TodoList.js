import React from 'react';
import PropTypes from 'prop-types';
import styles from './todoList.module.css';

const TodoList = ({ data = [] }) => (
  <table>
    <thead>
      <th>Number</th>
      <th>Task</th>
      <th>Completed</th>
      <th>User</th>
    </thead>
    {data.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td className={styles.tasks}>{item.title}</td>
        <td>
          {item.completed++ === 0 // eslint-disable-line
            ? (<span>Yes</span>)
            : (<span>No</span>)}

        </td>
        <td>{item.user.name}</td>
      </tr>
    ))}
  </table>
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
