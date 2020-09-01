import PropTypes from 'prop-types';

export const TodoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  username: PropTypes.string.isRequired,
});

export const TodoListShape = PropTypes.shape({
  todoList: PropTypes.arrayOf(TodoShape).isRequired,
});

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
});
