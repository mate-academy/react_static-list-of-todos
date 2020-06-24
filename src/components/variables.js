import PropTypes from 'prop-types';

export const todoShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
