import React from 'react';
import './TodoList.scss';

import PropTypes from 'prop-types';

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
          <table className={`table
            ${list.completed
          ? 'todoCompleted'
          : 'todoInProcess'
        }`
          }
          >
            <tbody>
              <tr>
                <td className="list_id">{list.id}</td>
                <td className="list_name">{list.user.name}</td>
                <td className="list_title">{list.title}</td>
                <td>
                  {list.completed ? 'Completed' : 'In process'}
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
