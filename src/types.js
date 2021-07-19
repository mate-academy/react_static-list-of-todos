import PropTypes from 'prop-types';

export const todosTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
