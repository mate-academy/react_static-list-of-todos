import PropTypes from 'prop-types';

export const TodoListType = {
  list: PropTypes.arrayOf().isRequired,
};

export const TodoType = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
