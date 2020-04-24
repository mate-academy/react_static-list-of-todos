import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <h4 className="todo-card__user">{props.data.name}</h4>
  );
}

User.propTypes = {
  data: PropTypes.string.isRequired,
};

export default User;
