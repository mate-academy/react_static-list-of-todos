import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ todo }) => (
  <>
    <div>
      <span>
        <User user={todo.user} />
      </span>
      <span>
        {todo.completed ? ' has completed ' : ' hasnt completed '}
      </span>
      <span>
        {todo.title}
      </span>
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suit: PropTypes.string,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }),
};
Todo.defaultProps = {
  todo: [],
};
