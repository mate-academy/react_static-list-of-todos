import PropTypes from 'prop-types';

export const ShapeTodo = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
});

export const ShapeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});
