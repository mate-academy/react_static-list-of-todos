import PropTypes from 'prop-types';

export const TodoListShape = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })),
};
