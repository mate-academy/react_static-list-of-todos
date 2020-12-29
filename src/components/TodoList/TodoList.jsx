import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.scss';

export function TodoList({ lists }) {
  return (
    <ul className="list">
      <table className="list_header">
        <tbody>
          <tr>
            <th className="list_id">Id</th>
            <th className="list_name">Nmae</th>
            <th className="list_title">Title</th>
            <th className="list_completed">Completed</th>
          </tr>
        </tbody>
      </table>
      {lists.map(list => (
        <li key={list.id} className="list_item">
          <Todo
            id={list.id}
            name={list.user.name}
            title={list.title}
            completed={list.completed}
          />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
