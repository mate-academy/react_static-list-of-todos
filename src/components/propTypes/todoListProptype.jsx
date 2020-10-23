import PropTypes from 'prop-types';

export const todoListPropType = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
    }),
  ).isRequired,
};
