import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.css';

export function Todo({ title, completed, user }) {
  return (
    <>
      <div className="item__container">
        <User {...user} />
        <div className="item__title">
          {`Title: ${title}`}
        </div>
        <div className="item__completed">
          {`Completed: ${completed ? 'true' : 'false'}`}
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
