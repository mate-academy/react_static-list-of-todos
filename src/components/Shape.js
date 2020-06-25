import PropTypes from 'prop-types';

export const ShapeTodoItem = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export const ShapeTodoList = {
  todos: PropTypes.arrayOf(ShapeTodoItem).isRequired,
};
