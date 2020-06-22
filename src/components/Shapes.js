import PropTypes from 'prop-types';

export const ShapeTodoItem = PropTypes.shape({
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
});

export const ShapeTodoList = PropTypes.shape({
  list: PropTypes.arrayOf(ShapeTodoItem).isRequired,
});
