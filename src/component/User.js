import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import todos from '../api/todos';
import TodoList from './TodoList';

function User(props) {
  const todo = todos.filter(t => t.userId === props.data.id);

  return (
    <div className="user_block">
      <div className="user_info">
        <h2>{props.data.name}</h2>
        <h3>{props.data.email}</h3>

        <div className="user_location">
          <p>
            <strong>Street:</strong>
            {' '}
            {props.data.address.street}
          </p>
          <p>{props.data.address.suite}</p>
          <p>
            <strong>City:</strong>
            {' '}
            {props.data.address.city}
          </p>
        </div>
      </div>

      <TodoList todos={todo} />

    </div>
  );
}
User.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    userId: PropTypes.number,
    email: PropTypes.string,
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
  })).isRequired,
};

export default User;
