import PropTypes from 'prop-types';

const propTypesTodoShape = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

export default propTypesTodoShape;
