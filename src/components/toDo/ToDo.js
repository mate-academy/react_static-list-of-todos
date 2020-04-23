import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import './toDo.css';

const ToDo = ({ text, done, user }) => (
  <>
    <User name={user} />
    <p className="size indentation">
      {
        done ? 'Completed' : 'Doing'
      }
    </p>
    <p className="size">
      {text}
    </p>
  </>
);

ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};

export default ToDo;
