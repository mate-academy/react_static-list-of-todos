import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export function Todo({ id, name, title, completed }) {
  return (
    <table className={`table ${completed
      ? 'todoCompleted'
      : 'todoInProcess'
    }`}
    >
      <tbody>
        <tr>
          <td className="list_id">{id}</td>

          <User name={name} />

          <td className="list_title">{title}</td>
          <td>
            {completed ? 'Completed' : 'In process'}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
