import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ item }) => {
  const { completed } = item;

  if (!completed) {
    return (
      <p className="not__completed">
        not completed
      </p>
    );
  }

  return (
    <p className="completed">
      completed
    </p>
  );
};

Status.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Status;
