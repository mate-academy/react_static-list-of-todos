import PropTypes from 'prop-types';
import UserShape from './UserShape';

const TodoShape = {
  todoList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: UserShape,
  }),
};

export default TodoShape;
