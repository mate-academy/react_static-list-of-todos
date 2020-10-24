import PropTypes from 'prop-types';
import propTypeUserShape from './propTypeUserShape';

const propTypeTodoShape = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: propTypeUserShape,
    }),
  ),
};

export default propTypeTodoShape;
