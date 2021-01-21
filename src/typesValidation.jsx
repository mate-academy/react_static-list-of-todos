import PropTypes from 'prop-types';

export const typesValidation = PropTypes.shape({
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
