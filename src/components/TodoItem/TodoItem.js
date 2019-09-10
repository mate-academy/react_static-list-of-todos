import React from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

import { Users } from '../User/User';

export const TodoItem = ({ todo }) => (
  <div className="card" style={{ width: '18rem'}}>
    <h3 className="task">{ todo.title }</h3>
    <Users user={todo.user} />
    <h6 className="card-subtitle mb-2 text-muted">
      { todo.completed ? '\u2714' : '\u2718' }
    </h6>
  </div>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.object,
  }).isRequired,
};
