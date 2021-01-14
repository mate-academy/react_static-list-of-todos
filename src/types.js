import PropTypes from 'prop-types';

export const TodoType = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export const TodoListType = {
  list: PropTypes.arrayOf(PropTypes.shape(TodoType)).isRequired,
};
