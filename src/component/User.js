import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import todos from '../api/todos';
import TodoList from './TodoList';
import { todoItemShape } from './TodoItem';

function User(props) {
  const userTodos = todos.filter(t => t.userId === props.user.id);

  return (
    <div className="user_block">
      <div className="user_info">
        <h2>{props.user.name}</h2>
        <h3>{props.user.email}</h3>

        <div className="user_location">
          <p>
            <strong>Street:</strong>
            {' '}
            {props.user.address.street}
          </p>
          <p>{props.user.address.suite}</p>
          <p>
            <strong>City:</strong>
            {' '}
            {props.user.address.city}
          </p>
        </div>
      </div>

      <TodoList todos={userTodos} />

    </div>
  );
}

const userShape = PropTypes.shape({
  userTodos: PropTypes.arrayOf(todoItemShape),
  name: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
  }),
});

User.propTypes = {
  user: userShape.isRequired,
};

export default User;
export { userShape };
