import PropTypes from 'prop-types';

export const TodoType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
  completed: PropTypes.bool,
};
