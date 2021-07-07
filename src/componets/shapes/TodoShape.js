import PropTypes from 'prop-types';

export const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}).isRequired;
