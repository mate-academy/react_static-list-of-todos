import PropTypes from 'prop-types';

export const TodoListProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.number,
      user: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export const TodoItemProps = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export const UserProps = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
