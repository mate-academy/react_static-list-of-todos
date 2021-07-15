import PropTypes from 'prop-types';

export const TodoPropTypes = () => ({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
});
