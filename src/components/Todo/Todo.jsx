import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <>
    <p className="List__todo">
      {`Todo: ${title}`}
    </p>
    <p className="List__bool">
      {`Completed: ${completed}`}
    </p>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
