import PropTypes from 'prop-types';

export const todoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.objectOf(PropTypes.string),
    ])).isRequired,
  ])).isRequired,
});
