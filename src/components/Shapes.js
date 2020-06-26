import PropTypes from 'prop-types';

export const ShapeTodoList = PropTypes.shape({
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export const ShapeTodoItem = ({
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  completed: PropTypes.bool.isRequired,
});

const ShapeUser = PropTypes.shape({
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
});

export default ShapeUser;
