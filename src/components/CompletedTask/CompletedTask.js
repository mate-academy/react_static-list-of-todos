import React from 'react';
import PropTypes from 'prop-types';
import './CompletedTask.scss';

export const CompletedTask = ({ status }) => (
  status
    ? <span className="completed">completed</span>
    : <span className="not-completed">not completed</span>
);

CompletedTask.propTypes = {
  status: PropTypes.bool.isRequired,
};
