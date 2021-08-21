import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ person }) {
  return (
    <>
      <span className={(person.id % 2 === 0) ? 'person_blue' : 'person_green'}>
        {` ${person.name}`}
      </span>
    </>
  );
}

User.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
