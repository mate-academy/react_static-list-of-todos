import PropTypes from 'prop-types';

export const TodoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
