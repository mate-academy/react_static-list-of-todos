import PropTypes from 'prop-types';

export const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool,
});

TodoType.defaultProps = {
  completed: false,
};
