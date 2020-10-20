import PropTypes from 'prop-types';

export const UserShape = {
  name: PropTypes.string.isRequired,
};

export const TodoShape = {
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape = {
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
  completed: PropTypes.bool.isRequired,
};

export const TodoListShape = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
